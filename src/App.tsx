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
      main: '#89CFF0', // Baby blue
    },
    secondary: {
      main: '#FF9E80', // Coral/peach - complementary to baby blue
    },
    background: {
      default: '#E6F3FF', // Light baby blue for background
      paper: '#E6F3FF', // Light baby blue for paper elements
    },
    mode: 'light'
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E6F3FF',
        },
      },
    },
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
