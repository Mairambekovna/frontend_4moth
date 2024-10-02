import './App.css';

function Header(){
    return (
        <>
            <Title/>
            <h2>I am Header component</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </>
    );
}

 function Content() {
     return (
         <>
            <Title />
             <div>
                 <p>This is the content section</p>
            </div>
         </>
     );
 }

function Footer () {
    return (
        <>
            <Title/>
            <div>logo</div>
        </>

    )
}

function Title () {
    return <h2>I am Title</h2>
}


function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
