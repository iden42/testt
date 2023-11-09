import Mainform from "./elements/mainform";
import './App.css'
import Footer from "./elements/footer";
import Map from "./elements/map";
import Decor from "./elements/decor";



function App() {

  
  return (
    <div className="App">

    <Decor></Decor>
    <Mainform></Mainform>
    <Map></Map>
    <Footer></Footer>

    </div>
  );
}

export default App;
