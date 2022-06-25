// import Carousel from "./components/carousel/Carousel.js";
import { myInterceptor1 } from "./components/ajax/MyInterceptor1.js";
import { myInterceptor2 } from "./components/ajax/MyInterceptor2.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import NavBar from "./components/navbar/NavBar.js";

function App() {
  myInterceptor1();
  myInterceptor2();
  return (
    <div>
      <Header />
      <NavBar></NavBar>
      {/* <Carousel></Carousel> */}
      <Main></Main>
      <Footer />
    </div>
  );
}
export default App;
