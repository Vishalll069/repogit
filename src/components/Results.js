import React from "react";
import "../App.css";


const Results = (props) =>{
    const { repos } = props;
    // console.log('Repos is :' , repos.data);

    const listRepos = 
        repos.length !==0 ? (
            repos.data.map((item) => (
            <div className="card" key={item.id}>
                 <a href={item.html_url}><h4>{item.name}</h4></a>
                 <div className="description"><p>{item.description}</p></div>
                 <div >{item.topics.map(topic=>(<div key={topic} className="language">{topic}</div>))}</div>
            </div>
            ))
        ) : (
            <h5 style={{fontSize:25, gridColumn:1/-1}}>:: search for the Repos you Want ::</h5>
        );
        
        // console.log(listRepos);
    
    return(
        <>
          <div className="card-container">{listRepos}</div> 
        </>
    );
}

export default Results;