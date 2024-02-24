import React from 'react'
import styles from "./Search.module.css"
//import { SearchIcon} from "../../assets/search-icon.png"

const Search = () => {
  return (
    <div >
      <form className={styles.wrapper}  >
		
        <input className={styles.search} placeholder='Search a song of your choice'/>
       
            <button className={styles.searchButton} type='submit' >
              
            </button>
     
      </form>
        </div>
  )
}

export default Search