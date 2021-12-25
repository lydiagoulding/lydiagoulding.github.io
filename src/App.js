import Sidebar from './Sidebar';
import './App.css';
import ComponentsPage from "./ComponentsPage";

function App() {
  return (
    <div className="App">
        <div className="AppGrid">
            <Sidebar></Sidebar>
            <div className="content">
                <ComponentsPage/>
            </div>
        </div>
    </div>
  );
}

export default App;
