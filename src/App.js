import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Global';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Mybeats from './Mybeats';
const theme = {
  colors: {
  header: 'rgba(232, 210, 166, 1)',
  body: 'rgba(250, 132, 132, 1)',
  beats: 'rgba(67, 207, 149, 1)'
  },
}



function App() {

  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
      <Route exact path='/dev' element={<Home/>}></Route>
      <Route exact path='/MyBeats' element={<Mybeats/>} ></Route>
    </Routes>
    </>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
