
import React from 'react';

function App() {
  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0e4d92',
        color: 'white',
        padding: '15px 30px',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
          <img src="/logo.png" alt="MatchNow Logo" style={{ height: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
          MatchNow!
        </div>
        <div>
          <button style={{ marginRight: '10px' }}>Entrar</button>
          <button>Cadastrar</button>
        </div>
      </header>
      <main style={{ textAlign: 'center', padding: 50 }}>
        <h1>MatchNow!</h1>
        <p>MVP em construção — nova versão a caminho!</p>
        <button>Começar agora</button>
      </main>
    </div>
  );
}

export default App;
