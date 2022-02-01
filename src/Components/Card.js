const Card = ({movies}) => {
    return ( 
        <div>
            {movies.map((movie) => (
                <div>
                    <p>{movie.original_title}</p>
                    <img src={movie.backdrop_path} alt="figura" />
                </div>
            ))}

        </div>
     );
}
 
export default Card;