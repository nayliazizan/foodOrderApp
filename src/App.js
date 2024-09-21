import { ThemeProvider } from '@mui/material/styles'; //provides theme context for material UI components
import { CssBaseline } from '@mui/material'; //resets css to ensure consistent styling across different browsers
import Users from './pages/Users';
import Admin from './pages/Admin';
import OrderedItemsProvider from './others/OrderedItemsProvider'; //context provider for handle ordered items
import { useItemsContext } from './others/itemsContext';
import { useThemeContext } from './others/themeContext';
import Footer from './components/Footer';

function App() {
  const {switchPage} = useItemsContext(); //access whether to swicth between users or admin page
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
