import Sidebar from './Sidebar';
import './App.css';
import CollapsableList from "./CollapsableList";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <CollapsableList header="CollapsableList">
          <ul>
              <li>Foobar</li>
              <li>Foobar</li>
              <li>Foobar</li>
          </ul>
          <CollapsableList
              header="InnerCollapsable"
              headerClasses="embiggen"
          >
              <ul>
                  <li>Foobar</li>
                  <li>Foobar</li>
                  <li>Foobar</li>
              </ul>
          </CollapsableList>
      </CollapsableList>
    </div>
  );
}

export default App;
