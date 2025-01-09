import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
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