import "./App.css";
import { useState } from "react";

function App() {
  const [currentItem, setCurrentItem] = useState(null);

  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
