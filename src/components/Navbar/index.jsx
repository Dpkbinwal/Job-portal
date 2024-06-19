import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const { loginWithRedirect,user, isAuthenticated, isLoading,logout } = useAuth0();
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
    
<nav class="shadow shadow-gray-50 w-100 px-8 md:px-auto">
	<div class="h-20 mx-auto md:px-4 p-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		{/* <!-- Logo --> */}
	<div class="text-indigo-500 md:order-1">
    <div className='text-3xl text-white font-bold'>Job Alert.</div>

	</div>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="hidden font-semibold justify-between text-white md:flex ">
                {/* <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 --> */}
				<li class="md:px-4 md:py-2 hover:text-indigo-400 "><a href="/">Home</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/about">About</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/resume">Resume</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/notes">Notes</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/interview">Interview Q&A</a></li>
				{/* <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Tech News</a></li> */}
			</ul>
		</div>
              
		<div class=" flex order-2 md:order-3">
                {
                  isAuthenticated && <p className='flex items-center text-white mr-5  '> <img className='rounded-full' src={user.picture} alt={user.name} width={35} height={35}/></p>
                }
                
                {
                  !isAuthenticated ?(<button onClick={() => loginWithRedirect()} class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                  {/* <!-- Heroicons - Login Solid --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Login</span>
        </button>): (<button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                  {/* <!-- Heroicons - Login Solid --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Logout</span>
        </button>) 
                }

			
     
      
      
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className=' text-white m-4 block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-900 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className='text-white  text-3xl font-bold shadow shadow-gray-500 w-100 p-5'>Job Alert.</div>
        {/* Mobile Navigation Items */}
        <div class="flex flex-col font-semibold mt-3  justify-center gap-4 text-white pl-5">
                  <a href="/">Home</a>
                  <a href="/about">About Us</a>
                  <a href="/resume">Resume</a>
                  <a href="/notes">Notes</a>
                  <a href="/interview">Interview Q&A</a>
              </div>
      </ul>

		</div>
    
	</div>
</nav>
</>
  );
};

export default Navbar;