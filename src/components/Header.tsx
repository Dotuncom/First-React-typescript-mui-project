import { useEffect, useState } from "react";
import logo from "../assets/logo-1-1.png";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

type MenuItemProps = {
  id: number;
  name: string;
  href: string;
};

const Header = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(1); 
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!open); 
  };

  const handleMenuItemClick = (id: number): void => {
    setActiveItem(id);
    setIsOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems: MenuItemProps[] = [
    { id: 1, name: "Intro", href: "#intro" },
    { id: 2, name: "Overview", href: "#overview" },
    { id: 3, name: "Features", href: "#features" },
    { id: 4, name: "Gallery", href: "#gallery" },
    { id: 5, name: "Price", href: "#price" },
    { id: 6, name: "Support", href: "#support" },
  ];

  return (
    <div className={`relative z-90 w-full h-25`}>
      <div
        className={`  flex items-center px-4 lg:px-10 justify-between ${
          isScroll ? "bg-black/90 w-full fixed py-2" : "pt-10 bg-black/89 md:bg-transparent"
        } transition-all duration-300`}
      >
        <div className="lg:w-50 lg:h-20">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((menuItem) => (
            <ul key={menuItem.id}>
              <li className="text-white hover:bg-amber-300 font-bold text-base flex px-4 py-2 rounded-full">
                <a 
                  href={menuItem.href}
                  className={`transition-colors duration-200  ${
                    activeItem === menuItem.id ? "text-white bg-amber-400 px-4 py-2 rounded-full" : ""
                  }`}
                  onClick={() => handleMenuItemClick(menuItem.id)}
                >
                  {menuItem.name}
                </a>
              </li>
            </ul>
          ))}
         <button className="hidden lg:block bg-amber-300 text-white font-bold rounded-full px-4 h-10 hover:text-amber-300 hover:bg-black transition-colors duration-500 ease-out"> Download App</button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={handleToggle}
          className="md:hidden z-90 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <FaX className="absolute left-0 " size={35} /> : <FaBars size={35} />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {/* {open && (
        <div 
          className="fixed inset-0 bg-black/10 z-90 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 w-[80%] min-h-screen bg-amber-400 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6">
          {menuItems.map((menuItem) => (
            <ul key={menuItem.id} className="border-b border-amber-500 last:border-b-0">
              <li
                className="text-gray-800 font-bold text-lg py-4"
              >
                <a 
                  href={menuItem.href}
                  className={`transition-colors duration-200 hover:text-white ${
                    activeItem === menuItem.id ? "text-white" : ""
                  }`}
                  onClick={() => handleMenuItemClick(menuItem.id)}
                >
                  {menuItem.name}
                </a>
              </li>
            </ul>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Header;