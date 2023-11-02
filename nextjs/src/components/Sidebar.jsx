import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {

  var router = useRouter()
  var {pathname} = useRouter()


  


  return (
    <div className='w-52 pr-4'>
      <div>
        <img className='w-40 pl-3 py-3' src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" />
      </div>

      <ul>
        <li>
          <Link className={`${pathname == "/dashboard" ? "bg-gray-200" : "hover:bg-gray-100"} flex items-center rounded-r-full pl-4 py-1`} href="/dashboard">
            <div><i class={`bx ${pathname == "/dashboard" ? "bxs-home" : "bx-home"}`}></i></div>
            <div className='ml-3'>Dashboard</div>
          </Link>
        </li>


        <li>
          <Link className={`${pathname == "/dashboard/products" ? "bg-gray-200" : "hover:bg-gray-100"} flex items-center rounded-r-full pl-4 py-1`} href="/dashboard/products">
            <div><i class={`bx ${pathname == "/dashboard/products" ? "bxs-box" : "bx-box"}`}></i></div>
            <div className='ml-3'>Products</div>
          </Link>
        </li>

        {/* <li>
          <label htmlFor='dashboardDrop' onClick={()=>router.push('/dashboard/reports/sales')} className={`${pathname.startsWith('/dashboard/reports') ? "bg-gray-200" : "hover:bg-gray-100"} flex items-center rounded-r-full pl-4 py-1`}>
            <div><i class={`bx ${pathname.startsWith('/dashboard/reports') ? "bxs-bar-chart-alt-2" : "bx-bar-chart-alt-2"}`}></i></div>
            <div className='ml-3'>Reports</div>
          </label>
          <input className='sr-only' type="checkbox" id='dashboardDrop' />
          <ul className='pl-11 py-1 hidden'>
            <li><Link className='border w-full block py-[2px]' href="/dashboard/reports/sales" >Sale Reports</Link></li>
            <li><Link className='border w-full block py-[2px]' href="/dashboard/reports/purchase">Purchase Reports</Link></li>
          </ul>
        </li> */}

        {/* <li>
          <Link className={`${pathname == "/dashboard/products" ? "bg-gray-200" : "hover:bg-gray-100"} flex items-center rounded-r-full pl-4 py-1`} href="/dashboard/products">
            <div><i class={`bx ${pathname == "/dashboard/products" ? "bxs-box" : "bx-box"}`}></i></div>
            <div className='ml-3'>Products</div>
          </Link>
        </li> */}



      </ul>

    </div>
  )
}

export default Sidebar