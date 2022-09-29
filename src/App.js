import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [bgi, setBgi] = useState(['bgi_1', 'bgi_2', 'bgi_3', 'bgi_4', 'bgi_5']);
  const [color, setColor] = useState([212,212,122]);
  const shuffle = () => {
    const newArray = bgi.sort(() => Math.random() - 0.5)
    setBgi([...newArray])
    setColor([randomInteger(0, 255), randomInteger(0, 255), randomInteger(0, 255)] )
  }
  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  useEffect(() => {
    let interval = setInterval(shuffle, 52000)
    return ()=>clearInterval(interval)
  }, [])

  return (
      <div className="App">
        <header className={`header ${bgi[0]}`}>
        </header>
        <div className={`left ${bgi[1]}`}></div>
        <div className={`main ${bgi[2]}`}>
          <button onClick={shuffle} className={"button"} style={{backgroundColor: `rgb(${color.join(',')})` }}>Click</button>
        </div>
        <div className={`right ${bgi[3]}`}></div>
        <footer className={`footer ${bgi[4]}`}>
        </footer>
      </div>
  );
}

export default App;
