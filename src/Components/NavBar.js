
import styles from "./NavBar.module.css"
import Button from "./Button";
import Filter from "./Filter";
import Vector from '../../src/Vector.svg'
const AppBar = ({movies}) => {
    return ( 
    <div className={styles.navbar_container}>
       <div className={styles.navbar_inicio}>
            <img className={styles.nav_img} src={Vector} alt='logo'/>
       </div>
    
        <div className={styles.navbar_text}>
            <p className={styles.text1}>Milhões de filmes, séries e pessoas para descobrir. Explore Já </p>
            <Filter/>
            <Button movies={movies}/>
        </div>
       
    </div> 
    );
}
 
export default AppBar;