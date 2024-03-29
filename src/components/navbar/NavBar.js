import { Link } from 'react-router-dom';

import SearchBar from 'components/searchBar/SearchBar';
import './NavBar.css';

const  NavBar = () => {
    return (  
        <nav className="navbar">
            <Link to ="/" className="page-title"><h1>Cook Book</h1></Link>
            <SearchBar />
            <Link to="/create" className="link">
                <button className="recipe-create">create recipe</button>
            </Link>
        </nav>
    );
}
 
export default NavBar;