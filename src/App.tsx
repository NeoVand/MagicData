import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/layout/MainLayout';
import TableView from './components/data/TableView';
import LandingPage from './components/UI/LandingPage';
import { Box, Button } from '@mui/material';

// Create a theme for the application
const theme = createTheme({
  palette: {
    primary: {
      main: '#4a73e8', // Blue color from the UI image
    },
    secondary: {
      main: '#4caf50', // Green
    },
    background: {
      default: '#f5f5f5', // Light gray
      paper: '#ffffff',  // White
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  // In a real app, this would be based on authentication state
  const [showLanding, setShowLanding] = useState(true);

  const handleEnterApp = () => {
    setShowLanding(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        height: '100vh', 
        width: '100vw', 
        margin: 0, 
        padding: 0, 
        overflow: 'hidden', 
        backgroundColor: '#f5f5f5' 
      }}>
        {showLanding ? (
          <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <LandingPage />
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                onClick={handleEnterApp}
              >
                Enter Application
              </Button>
            </Box>
          </Box>
        ) : (
          <MainLayout>
            <TableView />
          </MainLayout>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
