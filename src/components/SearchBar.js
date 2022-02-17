import axios from "axios";
import React, { useState} from "react";
import Results from "./Results";
// import {Form} from "semantic-ui-react"
// import "../App.css";
import "./comp.css"

const SearchBar = () =>{
    const [ searchInput , setSearchInput] = useState('')
    const [repos , setRepos] = useState([]);

    function handleChange(e){
        setSearchInput(e.target.value);
        // console.log(e)
      }

    const handleClick = async() => {
        console.log(searchInput);

        try{
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            setRepos(result);
        }catch(err){
            console.log(err);
        }
       
    };

    return(
        <>
            <div className="search-bar">
                <input className="Search" placeholder="Github User" type="text" value={searchInput} onChange={handleChange} />
                <button className="btn" type="submit" onClick={handleClick}>Search</button>
            </div>
            <div className="Results">
                <Results repos={repos} />
            </div>
            
        </>
    ) 
};

export default SearchBar;