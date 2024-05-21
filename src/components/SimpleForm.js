import React, { useState } from "react";
import Button from "./Button";
import styles from "./Button.module.css";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`A name was submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <Button label="Submit" />
    </form>
  );
}

export default SimpleForm;
