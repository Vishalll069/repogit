import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
// import ReactPaginate from 'react-paginate';

function App() {
  return (
    <>
    <div>
      <div className="navbar"><h2>Repo Search</h2></div>                 
    </div>
    <SearchBar/>
    </>
  );
}

export default App;
