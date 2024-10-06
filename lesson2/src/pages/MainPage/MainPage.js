
import About from "../../components/About/About";
import Title from "../../components/Title/Title"


function MainPage() {
    const info = {
        title: "Some Title",
        body: "Some body"
    };

    return (
        <div>
            <Title title="Hello world" />
            <About info={info}/>
        </div>
    );
}

export default MainPage;
