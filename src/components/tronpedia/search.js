import React from "react"
import {FaSearch} from "react-icons/fa"


const Search = () => {

	return (
        <div className="d-flex tronpedia-search-section">
            <div>
                <FaSearch size={30} />
                <input type="text" className="tronpedia-search-input" placeholder="topic or article" />
            </div>
            <div>
                <button type="button" className="tronpedia-search-button">Search Database</button>
            </div>
        </div>
	)
}

export default Search