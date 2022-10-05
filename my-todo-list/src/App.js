import "./App.css";
import { useState } from "react";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
    updateItemList([...itemList, currentItem]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemToList}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
