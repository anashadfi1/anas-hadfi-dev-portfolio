import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <>
    <Navbar />
    <Header/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}
