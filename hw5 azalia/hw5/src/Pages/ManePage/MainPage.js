import React, { useState, useRef } from "react";

const ManePage = () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    const inputRef = useRef(null);
    const addName = () => {
        if (name.trim()) {
            setNames([...names, name]);
            setName("");
            inputRef.current.focus();
        }
    };
    const changeName = (index) => {
        if (name.trim()) {
            const updatedNames = [...names];
            updatedNames[index] = name;
            setNames(updatedNames);
            setName("");
            inputRef.current.focus();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && name.trim()) {
            addName();
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Список имён</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <input
                    type="text"
                    ref={inputRef} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите имя"
                    style={{
                        width: "70%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "16px"
                    }}
                />
                <button
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px 15px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: name.trim() ? "pointer" : "not-allowed",
                        opacity: name.trim() ? 1 : 0.5
                    }}
                    onClick={addName}
                    disabled={!name.trim()}
                >
                    Добавить
                </button>
            </div>

            <div>
                {names.length === 0 ? (
                    <p
                        style={{
                            backgroundColor: "#f44336",
                            color: "white",
                            padding: "10px",
                            borderRadius: "5px",
                            textAlign: "center"
                        }}
                    >
                        Список пуст
                    </p>
                ) : (
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {names.map((n, index) => (
                            <li
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    backgroundColor: "#f1f1f1",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    marginBottom: "10px"
                                }}
                            >
                                <span>{n}</span>
                                <button
                                    style={{
                                        backgroundColor: "#2196F3",
                                        color: "white",
                                        padding: "5px 10px",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: name.trim() ? "pointer" : "not-allowed",
                                        opacity: name.trim() ? 1 : 0.5
                                    }}
                                    onClick={() => changeName(index)}
                                    disabled={!name.trim()}
                                >
                                    Поменять
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ManePage;
