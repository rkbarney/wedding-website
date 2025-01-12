import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Registry from './pages/Registry';
import RSVP from './pages/RSVP';
import Schedule from './pages/Schedule';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#89CFF0',
    },
    secondary: {
      main: '#FF9E80',
    },
    background: {
      default: '#E6F3FF',
      paper: '#E6F3FF',
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
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={baseUrl}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
