import "./App.css"
import Header from "./componen/header1/header -1";
import ColorSchemesExample from "./componen/navbar-1/navbar";
import { BasicExample, Date } from "./componen/footer-1/footer-1";
import { DiAndroid, DiWindows } from "react-icons/di";


function App() {

  return (
    <div>
      <ColorSchemesExample />
      <Header />

      <div className="Form-search">
        <div className="input-group">
          <input type="search" className="form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon" />
          <button type="submit" className="btn-sum">Submit</button>
        </div>
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