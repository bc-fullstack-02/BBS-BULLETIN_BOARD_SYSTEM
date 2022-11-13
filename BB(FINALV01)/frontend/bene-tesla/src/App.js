import './App.css';

function App() {
  const menu = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
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
