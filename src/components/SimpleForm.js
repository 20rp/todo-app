import React, { useState } from "react";
import Button from "./Button";
import styles from "./Button.module.css";

function SimpleForm() {
  const [name, setName, description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`A name was submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task name:
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <br></br>
        Description:
        <br></br>
        <input
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <Button label="Submit" />
    </form>
  );
}

export default SimpleForm;
