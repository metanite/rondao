import React from "react"
import {FaSearch} from "react-icons/fa"


const Search = () => {

	return (
        <div className="d-flex tronpedia-search-section">
            <form
            action="/developers/learning/tronpedia/search"
            method="get"
            autoComplete="off"
            >
                <div className="flex-fill">
                    <FaSearch size={30} />
                    <input
                        name="s" 
                        type="text" 
                        className="tronpedia-search-input" 
                        placeholder="topic or article" 
                    />
                </div>
                <div>
                    <button type="submit" className="tronpedia-search-button">Search Database</button>
                </div>
            </form>
        </div>
	)
}

export default Search