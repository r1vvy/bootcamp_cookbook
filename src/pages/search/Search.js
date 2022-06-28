import useFetch from "hooks/useFetch";
import RecipesList from "components/recipesList/RecipesList";
import { useLocation } from "react-router-dom";


const Search = () => {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    const { data, isPending, error} = useFetch(`http://localhost:8000/recipes?q=${query}`);

    return (
        <div>
        { error && <div>{ error }</div>}
        { isPending && <div>Loading...</div> }
        {data && <RecipesList recipes={data}/>}   
        </div> 
    )
}

export default Search