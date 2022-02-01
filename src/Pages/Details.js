import { useState, useEffect } from "react";
import api from "../api";

const api_key = "7cbb88dd714f84168b91799865f574d3";
const Details = ({movies}) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
      async function getCharacters() {
        const response = await api.get(`/movie/{movie_id}.`, {
          params: {api_key}
        });
        console.log(response.data.results)
        setDetails(response.data.results);
      }
      getCharacters();
    }, []);

    // GET /movie/{movie_id}.
    return ( 
        <div>
            <p>Details</p>
            {details.map((detail) => (
                <div>
                    <p>Detalhes</p>
                </div>
            ))}
        </div>
     );
}
 
export default Details;