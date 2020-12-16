import Header from './Components/Header';
import Navigation from './Components/Navigation';
import CardContainer from './Components/CardContainer';
import SignIn from './Components/SignIn';
import LogInForm from './Components/Login';

// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <SignIn /> */}
        {/* <LogInForm /> */}
        <Navigation />
        {/* <CardContainer /> */}
      </header>
    </div>
  );
}

export default App;
