import { useEffect, useState } from 'react'
import logo from '../assets/logo-1-1.png'

type MenuItemProps={
    id:number,
    name:string,
    href:string
}

const Header = () => {
    const [isScroll, setIsScroll] = useState(true)
    useEffect(()=>{
    const handleScroll=()=>{
        if(window.scrollY > 50){
                setIsScroll(true)
        }else{
            setIsScroll(false)
        }
     }
     window.addEventListener('scroll', handleScroll)
     return ()=>{
        window.removeEventListener('scroll', handleScroll)
     }
    },[])
     
    const isActive=(id:number)=>{
            const isActive = menuItems.filter(menuItem => menuItem.id === id)
                
         }
    const menuItems:MenuItemProps[]=[
        {id:1, name:'Intro', href:'/' },
        {id:1, name:'Overview', href:'/' },
        {id:1, name:'Features', href:'/' },
        {id:1, name:'Gallary', href:'/' },
        {id:1, name:'Price', href:'/' },
        {id:1, name:'Support', href:'/' }
    ]
  return (
    <div className={`hidden  lg:block sticky z-1000 w-full h-25  `}>
<div className={`flex items-center px-10 justify-between  ${isScroll ?'bg-black/50 w-full  fixed':'pt-10'} `}>
 <div className='w-50 h-20  '>
            <img 
            src={logo} alt="logo" 
  className='w-full h-full'
            />
        </div>
        <div className='flex space-x-4'>
          {
           menuItems.map((menuItem)=>(
           <ul className=''>
             <li 
             className='text-white font-bold text-base flex px-4 py-2 rounded-full'
             key={menuItem.id}>
                    <a href="#"> {menuItem.name}</a>
             </li>
           </ul>
            
           ))
          }
        </div>
</div>
       
    </div>
  )
}

export default Header