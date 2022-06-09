import RecipesList from 'components/recipesList/RecipesList';
import useFetch from 'hooks/useFetch';

import './Home.css'

const Home = () => {
    const { data: recipes, isPending, error } = useFetch("http://localhost:8000/recipes");

    return (
      <div className="home">
          { error && <div>{ error }</div>}
          { isPending && <div>Loading...</div> }
          {recipes && <RecipesList recipes={recipes} title="All Recipes"/>}
      </div>
    );
}
 
export default Home;