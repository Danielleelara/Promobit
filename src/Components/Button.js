const Button = ({movies}) => {
    return ( 
        <div>
            {movies.map((movie) => <button>{movie.original_title}</button> )}
        </div>
     );
}
 
export default Button;