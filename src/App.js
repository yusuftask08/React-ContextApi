import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          <UserProvider>
            <Container />
          </UserProvider>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
