import Carousel from "./components/carousel/Carousel.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import NavBar from "./components/navbar/NavBar.js";

function App() {
  return (
    <div>
      <Header />
      <NavBar></NavBar>
      <Carousel></Carousel>
      <Main></Main>
      <Footer />
    </div>
  );
}
export default App;
