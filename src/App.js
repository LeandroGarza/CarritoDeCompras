//import logo from './logo.svg';
import bici2 from './images/bici.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>BiciMundo "Tres F"</h2>
        <h3><i><u>Bicicletas de Calidad Premium</u></i></h3>
        <img src={bici2}  className="App-logo" alt="logo"/>
        <p>
          <input type = "text" placeholder='Usuario' name = "usuario/mail"/>
          <br></br>
          <input type = "password" placeholder='Contraseña' name = "psw"/>
          <br></br>
          <button class="button" type = "button">Ingresar</button>
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
