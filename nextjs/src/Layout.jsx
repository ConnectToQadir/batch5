import React from 'react'
import Navbar from './components/Navbar'
import { useRouter } from 'next/router'
import Sidebar from './components/Sidebar'

const Layout = ({children}) => {

  var {pathname} = useRouter()



  return (
    <div>

        {
          pathname.startsWith("/dashboard") ? 
          <div className='flex h-screen overflow-hidden'>
            <div ><Sidebar /></div>
            <div className='h-screen p-4 flex-1 overflow-y-auto dashboadMain'>
              {children}
            </div>
          </div>
          :

          <>
            <Navbar />
            {children}
          </>
        }
    </div>
  )
}

export default Layout