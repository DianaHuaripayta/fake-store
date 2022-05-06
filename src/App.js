import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header/Header";
import ProductListing from './containers/ProductListing'
import ProductsDetails from "./containers/ProductsDetails";
import {  ThemeProvider } from '@mui/material/styles';
import {theme} from './styles/palette'
function App() {
  return (
    <>  
    <ThemeProvider theme={theme}>
      <Header/>
      <Routes>
            <Route path="/" element={ <ProductListing/>} />
            <Route path="/product/:productId" element={ <ProductsDetails/>} />
            <Route path="*" element={ <h1>no hay resultados</h1>} />
      </Routes>
      {/* <Footer/> */}
    </ThemeProvider>
    </>
  );
}

export default App;
