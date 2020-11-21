import React, {useState} from 'react';
import './style.css';

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
                <li><a href='#'>Tema</a></li>
                <li><a href='#'>Accra</a></li>
                <li><a href='#'>Ho</a></li>
                <li><a href='#'>Kpone</a></li>
                <li><a href='#'>Bolga</a></li>
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
