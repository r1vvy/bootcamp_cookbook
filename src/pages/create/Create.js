import { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";

import "./Create.css";

const Create = () => {
  const id = uuid().slice(0, 8);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [InputDATA, setInputData] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookTime] = useState("");
  const [isPending, setIsPending] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    setIngredients(ingredients => [...ingredients, InputDATA])
  }


  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    const recipe = { id, title, ingredients, method, cookingTime};
    recipe.cookingTime += " minutes"; 

    setIsPending(true);

    fetch("http://localhost:8000/recipes", {
      method: "POST", // post request
      headers: { "Content-Type": "application/json" }, // telling server to post an app that is sent w/ this request
      body: JSON.stringify(recipe),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Recipe ingredients:</label>
       <input
          className="ingredients"
          type="text"
          required
          value={InputDATA}
          onChange= {(e) => setInputData(e.target.value)}
        />
        <h4>Current ingredients:</h4>
        <p>{ingredients}</p>
        <label>Recipe method:</label>
        <textarea
          className="method"
          type="text"
          required
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        <label>Cooking time (in minutes):</label>
       <input
          type="text"
          required
          value={cookingTime}
          onChange= {(e) => setCookTime(e.target.value)}
        />
        {!isPending && <button className="submit">submit</button>}
        {isPending && <button className="submit" disabled>Adding recipe...</button>}
      </form>
      <button className="add" onClick={ handleClick }>
        add
        </button>
    </div>
  );
};

export default Create;
