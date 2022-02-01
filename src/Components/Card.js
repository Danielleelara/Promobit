const Card = ({movies}) => {
    return ( 
        <div>
            {movies.map((movie) => <p>{movie.original_title}</p>)}

        </div>
     );
}
 
export default Card;