import { ThemeProvider } from '@emotion/react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Users from './pages/Users';
import Admin from './pages/Admin';
import OrderedItemsProvider from './others/OrderedItemsProvider';
import { useItemsContext } from './others/itemsContext';
import { useThemeContext } from './others/themeContext';

function App() {
  const {switchPage} = useItemsContext();
  const {theme} = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <OrderedItemsProvider>
        {switchPage ? <Users/> : <Admin/>}
      </OrderedItemsProvider>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
