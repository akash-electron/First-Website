import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { motion } from 'framer-motion'


function Header() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center '>
        <motion.img initial={{rotate:0}}
        animate={{rotate:360 }}
        transition={{duration:4 ,  repeat: Infinity , ease:'linear'}}
         className="w-12" src="/logo.png" alt="Logo" />
        </div>
        <div className="flex m-8 gap-4 justify-center items-center ">
          <a className="animate-pulse" href="https://github.com/akash-electron"><FaGithub size={20}/></a>
          <a className="animate-pulse"  href="https://leetcode.com/u/ielectron/"><TbBrandLeetcode size={23}/></a>
          <a className="animate-pulse" href="https://www.instagram.com/__.akash_pandey._/"><FaInstagram size={20}/></a>
          <a className="animate-pulse" href="https://www.linkedin.com/in/akash-pandey-783709258/"><FaLinkedinIn size={20}/></a>
        </div>
      
    </nav>
  );
}

export default Header;

