import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
// import "../App.css";
import "./comp.css"


const SearchBar = () =>{
    const [ searchInput , setSearchInput] = useState('')
    const [owner, setOwner] = useState([]);
    const [repos , setRepos] = useState([]);



    function handleChange(e){
        setSearchInput(e.target.value);
        // console.log(e)
    }

    
        const handleClick = async() => {
            // console.log(searchInput);

            try{
                const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
                setRepos(result);
            }catch(err){
                console.log(err);
            }
    
            try{
                const result2 = await axios(`https://api.github.com/users/${searchInput}`);
                setOwner(result2);
            }catch(e){
                console.log(e);
            }
            
        };
        
    
    console.log("owner",owner)
    console.log("this is repoos ",repos.data);
    return(
        <>
        
            <div className="search-bar">
                <input className="Search" placeholder="Github User" type="text" value={searchInput} onChange={handleChange} />
                <button className="btn" type="submit" onClick={handleClick}>Search</button>
            </div>
            <div className="profile">
                <div className="profile-img">
                    {repos.data && <img src={repos.data[0].owner.avatar_url} alt="" />}
                    
                </div>
                <div className="profile-data">
                    {repos.data && <h3>{repos.data[0].owner.login}</h3>}
                    {owner.data && <p className="name">{owner.data.name}</p>}
                    <h5 className="bio">{owner.data && <p>{owner.data.bio}</p>}</h5>
                    {owner.data && <a href={owner.data.html_url}>{owner.data.html_url}</a>}
                </div>
            </div>
            <div className="Results">
                <Results repos={repos}  />
            </div>
                            
        </>
    ) 
};

export default SearchBar;