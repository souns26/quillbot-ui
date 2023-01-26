import Header from './components/Header';
import Content from './components/Content';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily:'Open Sans'
  },
  palette: {
    primary: {
      main: '#499557',
    },
    secondary: {
      main: '#DC9E00',
    },
    info: {
      main: '#dcdcdc',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Header/>
      <Content/>
    </div>
    </ThemeProvider>
  );
}

export default App;
