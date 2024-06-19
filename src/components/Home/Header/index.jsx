import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Header() {

  const { user, isAuthenticated,  } = useAuth0();
  
  return (
    
    <div className='mt-10 flex flex-col gap-5 items-center ml-3 justify-center text-white md:mx-20'>
        {
          isAuthenticated && <h1 className='text-2xl font-semibold sm:text-3xl md:text-3xl '> Welcome {user.name} !</h1>
       
        }
        <h1 className='text-2xl font-bold sm:text-3xl md:text-5xl '>Your ideal job awaits, start the search</h1>
        <p className='text-xl'>Get latest job openings that best suits you!</p>
    </div>
  )
}

export default Header