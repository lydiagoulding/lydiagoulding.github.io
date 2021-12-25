import Sidebar from './Sidebar';
import './App.css';
import ComponentsPage from "./ComponentsPage";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <div className="AppGrid">
            <Sidebar></Sidebar>
            <div className="content">
                <ComponentsPage/>
            </div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
