import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {getCategories} from "./components/features/categories/categoriesSlice";
import AppRoutes from "./components/Routes/AppRoutes";
import {getProducts} from "./components/features/products/productsSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts())
    }, [dispatch]);

  return (
      <div>
          <Header/>
          <div className="container">
              <Sidebar />
              <AppRoutes />
          </div>

          <Footer />
      </div>
  );
}

export default App;
