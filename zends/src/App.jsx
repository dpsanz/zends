import Footer from "./Componentes/Footer.jsx";
import Header from "./Componentes/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default App;