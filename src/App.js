import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [checkedItems, setCheckedItems] = useState({
    counterOne: false,
    counterTwo: false,
    counterThree: false,
    counterFour: false,
  });

  const handleSelectCheckbox = (e) => {
    let checkedKeys = { ...checkedItems };
    checkedKeys[e.target.name] = !checkedKeys[e.target.name];
    console.log(checkedKeys);
    setCheckedItems(checkedKeys);
  };
  const handleSelectAll = (e) => {
    e.preventDefault();
    let checkedKeys = { ...checkedItems };

    Object.keys(checkedKeys).forEach((j) => (checkedKeys[j] = true));

    setCheckedItems(checkedKeys);
  };

  let selectedOpt = Object.keys(checkedItems).filter(
    (j) => checkedItems[j] === true
  );

  let element = Object.keys(selectedOpt).map((i, k) => (
    <p key={k}>{`${(i, selectedOpt[i])}`}</p>
  ));

  

  return (
    <div className="App">
      <label className="spacingToTags">
        <input
          type="checkbox"
          checked={checkedItems["counterOne"]}
          name="counterOne"
          onChange={handleSelectCheckbox}
        />
        counterOne
      </label>

      <label className="spacingToTags">
        <input
          type="checkbox"
          checked={checkedItems["counterTwo"]}
          name="counterTwo"
          onChange={handleSelectCheckbox}
        />
        counterTwo
      </label>
      <label className="spacingToTags">
        <input
          type="checkbox"
          checked={checkedItems["counterThree"]}
          name="counterThree"
          onChange={handleSelectCheckbox}
        />
        counterThree
      </label>
      <label className="spacingToTags">
        <input
          type="checkbox"
          checked={checkedItems["counterFour"]}
          name="counterFour"
          onChange={handleSelectCheckbox}
        />
        counterFour
      </label>
      <button
        disabled={Object.keys(checkedItems).every(
          (j) => checkedItems[j] === true
        )}
        type="button"
        onClick={handleSelectAll}
      >
        SelectAll{" "}
      </button>

      {element}
    </div>
  );
}

export default App;
