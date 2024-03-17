import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}


function Main(props) {
  return (
    <main>
      <img src={props.image} alt="Cat" />
    </main>
  );
}

function App() {
  const title = "Cat";
  const catImage = require('./cat.jpg');

  return (
    <div className="App">
      <Header title={title} />
      <Main image={catImage} />
    </div>
  );
}

export default App;
