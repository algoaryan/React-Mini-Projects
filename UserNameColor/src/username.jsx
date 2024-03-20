import { useState } from "react";

function username({ Name, Color }) {
  let [userName, setUserName] = useState("");

  const nameChange = () => {
     userName = setUserName
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Name" onChange={nameChange}/>
        <label htmlFor="color">Choose a Color:</label>
        <input list="colors" id="color" name="color" />
        <datalist id="colors">
          <option value="Chocolate" />
          <option value="Coconut" />
          <option value="Mint" />
          <option value="Strawberry" />
          <option value="Vanilla" />
        </datalist>
      </form>
    </div>
  );
}

export default username;
