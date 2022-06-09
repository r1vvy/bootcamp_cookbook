import { Link } from "react-router-dom";

import "./RecipesList.css";

const RecipesList = ({ recipes, title }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-preview" key={recipe.id}>
          <h2 className="recipe-title"> {recipe.title} </h2>
          <h3 className="recipe-time"> {recipe.cookingTime} </h3>
          <p className="recipe-method">
            {recipe.method.length > 100
              ? `${recipe.method.substring(0, 100)}...`
              : recipe.method}
          </p>
          <Link className="recipe-cook" to={`/recipes/${recipe.id}`}>
            <button>Cook this</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipesList;
