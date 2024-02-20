import NavBar from "./Components/NavBar";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Product from "./Screens/Product";
import Footer from "./Screens/Footer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
