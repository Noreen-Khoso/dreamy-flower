import React from 'react'
import { FcMenu } from "react-icons/fc";
import BUtton from './BUtton';
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#About",
  },
  {
    id: 3,
    name: "Services",
    link: "/#Service",
  },
  {
    id: 4,
    name: "Review",
    link: "/#Review",
  },
];

const Navigation = () => {
    
  return (
    <>
    <div className=' absolute  w-full flex justify-between items-center py-5 px-5'>
    <h1 className=' text-black font-bold text-[1.2rem] uppercase ml-2 z-20 '>Dreamy <span className=' '>Flower</span> </h1>
    <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-green-400 duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                </ul>
                <BUtton/>
    
    
    
                

     
    
    
    </div>
    </>
  )
}

export default Navigation