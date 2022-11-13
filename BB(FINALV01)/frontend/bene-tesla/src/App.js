import './App.css';

function App() {
  const menu = [
    {
      name: 'INICIO',
      link: '/home',
    },
    {
      name: 'SOBRE',
      link: '/about',
    },
    {
      name: 'CONTATO',
      link: '/contact',
    },
  ];
  return (
     
    <div className="App">
      <header className="App-header">
        <ul>
          {menu.map((item) => (
            <li>
              <a href={item.link}>{
                item.name
              }</a>
            </li>
          ))}

        </ul>
      </header>
        
    </div>
   
  );
}

export default App;
