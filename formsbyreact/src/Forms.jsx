import { useState } from "react";
import "./forms.css";
function Forms() {
  let [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  let preventDefaultAction = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };

  // let [name, setName] = useState("");
  // let [email, setEmail] = useState("");
  // let [password, setPassword] = useState("");
  // let [username, setUsername] = useState("");

  // let nameChange = (event) => {
  //   setName(event.target.value);
  // };
  // let changeEmail = (event) => {
  //   setEmail(event.target.value);
  // };
  // let changePassword = (event) => {
  //   setPassword(event.target.value);
  // };
  // let changeUsername = (event) => {
  //   setUsername(event.target.value);
  // };
  return (
    <>
      <div>
        <h1>Forms by React</h1>
      </div>
      <div className="container">
        <form onSubmit={preventDefaultAction}>
          <label htmlFor="name"> Name </label>{" "}
          <input
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
          />
          <br /> <br />
          <label htmlFor="email"> Email </label>
          <input
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />
          <br /> <br />
          <label htmlFor="password"> Password </label>
          <input
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />
          <br /> <br />
          <label htmlFor="username"> Username </label>
          <input
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            name="username"
          />
          <br /> <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
export default Forms;
