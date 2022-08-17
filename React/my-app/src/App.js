import logo from './logo.svg';
import foto from './Las.png'
import './App.css';



function App() {
  return (
    
    <div className="App">
      <nav>
          <ul className="list">
          <li className="items">Home</li>
          <li className="items">Produtos</li>
          <li className="items"> <a href="https://api.whatsapp.com/send?phone=5518991562715?'oi'" target="_blank"
            >Chama no Zap</a></li>
        </ul>
      <button className="btn">BTN</button>
    </nav>
      <header className="App-header">
        <img src={foto} className="App-logo" alt="logo" />
        <p>
          <h2>Página em construção</h2>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/marcos-rodio-96757a106/"
          target="_blank"
          rel="noopener noreferrer"
        >
           
          <p>
          Catálogo Virtual
          </p>
        </a>
        
      
   
      </header>
    </div>
  );
}

export default App;
