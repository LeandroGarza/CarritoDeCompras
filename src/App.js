//import logo from './logo.svg';
//import logo from './images/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Almacenes Nacionales</h1>
        <h3><i><u>Tu Mercado De Confianza</u></i></h3>
        <br></br>
        <img src="images/bici.png"  className="App-logo" alt="logo"/>
        <p>
          <input type = "text" placeholder='Usuario' name = "usuario/mail"/>
          <br></br>
          <input type = "password" placeholder='Contraseña' name = "psw"/>
          <br></br>
          <button type = "button">Ingresar</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
  
        </a>
      </header>
    </div>
  );
}

export default App;
