import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import RSVP from './pages/RSVP';
import Registry from './pages/Registry';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // A romantic purple color
    },
    secondary: {
      main: '#f50057', // A complementary pink color
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/registry" element={<Registry />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
