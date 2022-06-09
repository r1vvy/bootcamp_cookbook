import { Link } from "react-router-dom";

import "./RecipesList.css"

const RecipesList = ({ recipes, title }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-preview" key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h2> {recipe.title} </h2>
            <h3> {recipe.cookingTime} </h3>
            <p> {recipe.method} </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipesList
