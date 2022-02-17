import React from "react";
import "../App.css";


const Results = (props) =>{
    const { repos } = props;
    console.log('Repos is :' , repos);

    const listRepos = 
        repos.length !==0 ? (
            repos.data.slice(0, 10).map((item) => (
            <div className="card" key={item.id}>
                <div className="username">{item.searchInput}</div>
                 <a href={item.html_url}>{item.name}</a>
                 <div className="description">{item.description}</div>
                 <div className="language">{item.language}</div>
            </div>
            ))
        ) : (
            <li>search for the Repos you Want</li>
        );
        console.log(listRepos);
    // const repoName = 
    
    return(
        <>
          <div className="card-container">{listRepos}</div> 
        </>
    );
}

export default Results;