import Header from './Components/Header';
import Navigation from './Components/Navigation';
import CardContainer from './Components/CardContainer';

// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navigation />
        <CardContainer />
      </header>
    </div>
  );
}

export default App;
