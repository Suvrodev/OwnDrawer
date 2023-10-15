import React, { useState } from 'react';
import './Main.css'
import Header from '../Pages/SharedPage/Header/Header';
import Home from '../Pages/Home/Home';
import { Link, Outlet } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Main = () => {
    const [showDrawer,setShowdrawer]=useState(true)

    const handleBar=()=>{
        setShowdrawer(!showDrawer)
    }
    console.log("Bar: ",showDrawer);
    return (
        <div>
            <Header handleBar={handleBar}></Header>
            <div className='bg-yellow-400 flex relative '>
                <div className={`bg-orange-600  ${showDrawer?'h-[100vh] w-[250px] absolute left-0 md:static  ':'relative -left-52 md:static w-0  md:hidden  '}  `}>
                   <div className='flex flex-col gap-4 font-bold p-5'>
                        <p className=' flex justify-end'> <FaAngleLeft onClick={handleBar} /> </p>
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contact'}>Contact</Link>
                        <Link to={'/feedback'}>Feedback</Link>
                   </div>
                </div>
                <div className='bg-purple-400 mainOutlet w-full'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Main;