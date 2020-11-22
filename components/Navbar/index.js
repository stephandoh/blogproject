import React, {useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

const Navbar=(props)=> {

    const [search, setSearch] = useState(false);
    

    const submitSearch=(e)=>{
        e.preventDefault();
        alert('Searched');
    }

    const openSearch=()=>{
        setSearch(true);
    }

    const searchClass= search? 'searchinput active':'searchinput';

    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
                <li><NavLink to='/tech'>Technology</NavLink></li>
                <li><NavLink to='/business'>Business</NavLink></li>
                <li><NavLink to='/entertainment'>Entertainment</NavLink></li>
                <li><NavLink to='/health'>Health</NavLink></li>
                <li><NavLink to='/sports'>sports</NavLink></li>
            </ul>
            <div className='search'>
                <form onSubmit={submitSearch}>
                    <input type='text' className={searchClass} placeholder='Search'/>
                    <img onClick={openSearch} className='searchicon' src={require('../../icons/search.png')} alt='?'/>
                </form>      
            </div>
        </div>
    )
}

export default Navbar
