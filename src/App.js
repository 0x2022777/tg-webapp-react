import './App.css';
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready();
    }, [])

   const onClose = () => {
   }

  return (
    <div className="App">
          <h1> Assalaumagaleikum! </h1>
          <button onClick={onClose}>Жабу</button>
    </div>
  );
}

export default App;

