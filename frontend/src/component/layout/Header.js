import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <div>
        <header id="header" class="header">
            <nav class="navigation">
                <div class="nav-center container">
                    <div class="logo">
                        LOGO
                    </div>
                    <div class="nav-menu"> 
                        <span className='searchBox'>
                            Search by Title or Brand &nbsp; <FontAwesomeIcon className="spaceIcon" icon={faSearch}  />
                        </span>
                        <button className="add_Product_btn">Add Product</button>
                    </div>
                </div>
            </nav>
        </header> 
    </div>
  )
}

export default Header