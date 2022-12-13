import './SearchBar.css';
import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchBar() {
    const inputRef = useRef();
    const navigate = useNavigate();

    const handleOnClick = useCallback(() => navigate(`/discover/search/${inputRef.current.value}`, { replace: true }), [navigate]);

    return (
        <div className="form-group fg--search">
            <input ref={inputRef} type="text" className="input" placeholder="Search Movie..." onKeyDown={(e) => e.key === "Enter" ? handleOnClick() : ""}></input>
            <button onClick={() => handleOnClick()} type="submit"><i className="fa fa-search"></i></button>
        </div>
    );
};




export default SearchBar;