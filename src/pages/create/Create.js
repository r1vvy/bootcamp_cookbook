import { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";

const Create = () => {
  const id = uuid().slice(0, 8);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [tempIngredient, setTempIngredient] = useState('');
  const [method, setMethod] = useState("");
  const [cookingTime, setCookTime] = useState("");

  const [isPending, setIsPending] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    const recipe = { id, title, ingredients, method, cookingTime };

    setIsPending(true);

    fetch("http://localhost:8000/recipes", {
      method: "POST", // post request
      headers: { "Content-Type": "application/json" }, // telling server to post an app that is sent w/ this request
      body: JSON.stringify(recipe), // turns blog into json string
    }).then(() => {
      setIsPending(false);
      navigate("/recipes/" + id);
    });
  };
  const handleClick = event => {
    event.preventDefault();

    setIngredients(tempIngredient);
  }

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
          type="text"
          required
          value={tempIngredient}
          onChange= {(e) => setTempIngredient(e.target.value)}
        />
        <button onClick={handleClick}>
        Add
        </button>
        <h4>Current ingredients:</h4>
        <p> {ingredients} </p>
        <label>Recipe method:</label>
        <input
          type="text"
          required
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        {!isPending && <button>submit</button>}
        {isPending && <button disabled>Adding recipe...</button>}
      </form>
    </div>
  );
};

export default Create;
