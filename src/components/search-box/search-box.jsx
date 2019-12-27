import React from 'react'
import './search-box.css'
const SearchBox = () =>(
    <div>
    <input type="search" placeholder="Search Monster" onChange={e => this.setState
        ({searchField: e.target.value})
        }/>
    </div>
)