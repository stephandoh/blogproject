import React from 'react';
import './style.css';
import search from '../../icons/search.png'

const Navbar=(props)=> {

    const [search, setSearch] = useState(false);
    const submitSearch=(e)=>{
        e.preventDefault();
        alert('Searched')
    }
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
                    <input type='text' classname='searchInput' placeholder='Search'/>
                    <img src={search}/>
                </form>      
            </div>
        </div>
    )
}

export default Navbar
