import Button from "./Button";
import Filter from "./Filter";
const AppBar = ({movies}) => {
    return ( 
    <div>
        <p>TMDB</p>
        <div>
            <p>Milhões de filmes, séries e pessoas para descobrir. Explore Já </p>
            <Filter/>
            <Button movies={movies}/>
        </div>
       
    </div> 
    );
}
 
export default AppBar;