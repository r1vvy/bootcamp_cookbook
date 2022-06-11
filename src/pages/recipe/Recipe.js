import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";

import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:8000/recipes/" + id);

  return (
    <div className="recipe-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        <article>
          <div className="recipe-main">
            <h2> {recipe.title} </h2>
            <h3> Takes {recipe.cookingTime} to cook. </h3>
            <div className="recipe-ingredients">
              {recipe.ingredients.map(function (item, index) {
                return (
                  <span>
                    {index !== recipe.ingredients.length - 1
                      ? (index ? ", " : "") + item
                      : ", and " + item + "."}
                  </span>
                );
              })}
            </div>
          </div>
          <p className="recipe-method"> {recipe.method} </p>
        </article>
      )}
    </div>
  );
};

export default Recipe;
