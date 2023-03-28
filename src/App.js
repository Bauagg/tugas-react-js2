import "./App.css"
import ColorSchemesExample from "./componen/navbar-1/navbar";
import { BasicExample, Date } from "./componen/footer-1/footer-1";
import { DiAndroid, DiWindows } from "react-icons/di";
import Header from "./componen/header1/header1";


function App() {

  return (
    <div>
      <ColorSchemesExample />
      <div>
        <Header />
      </div>

      <div className="container-2">
        <div className="bagian1">
          <h2>Menu Makanan</h2>
          <BasicExample />
        </div>

        <div className="bagian2">
          <Date />
        </div>
        <div className="clear"></div>
      </div>
      <div className="ahir">
        <p><DiAndroid className="sistem" /><DiWindows className="windows" /></p>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum,</p>
      </div>
    </div>

  );
}


export default App;