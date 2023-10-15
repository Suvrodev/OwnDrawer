import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";


const Header = ({handleBar}) => {
   
    return (
        <div className='bg-green-600 p-1 md:p-4 text-sm md:text-xl  font-bold flex'>
           <div className='icon'>
             < FaBars onClick={handleBar} />
           </div>
           <div className='allLink flex gap-4 justify-center'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/feedbacl'}>Feedback</Link>
           </div>
           <div className='kichuna'>

           </div>
        </div>
    );
};

export default Header;