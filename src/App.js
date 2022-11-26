import logo from './logo.svg';
import './App.css';

function App() {

  const word = 'word'
  const word2 = 'word2'


  const addFun = (a,b) =>{
    return(
      <div>{a}, {b}</div>
    )
  }
  return (
    <div className="App">
      {addFun(word,word2)}
    </div>
  );
}

export default App;
