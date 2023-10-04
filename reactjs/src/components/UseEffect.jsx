import React, { useState,useEffect } from 'react'

const UseEffect = () => {


    var [num,setNum] = useState(0)
    // useEffect(()=>{
    //     console.log("Lahore")
    // },[])


    var [error,setError] = useState('')
    var [username,setUsername] = useState('')

    function formatChecker(){
        if(username.search(/ /) !== -1){
            setError("Spaces Are Not Allowed!")
        }else{
            setError("")
        }
    }

    useEffect(()=>{
        console.log("Username Checking...")
        formatChecker()

    },[username])

  return (
    <div>

        <div className='flex justify-center my-5 items-center'>
            <button onClick={()=>setNum(num-1)} className='bg-blue-800 text-white py-1 px-2 rounded-md' >-</button>
            <span className='text-xl mx-2 font-semibold'>{num}</span>
            <button onClick={()=>setNum(num+1)} className='bg-blue-800 text-white py-1 px-2 rounded-md' >+</button>
        </div>


        <input style={{color:error?"red":"green"}} type="text" onChange={(e)=>setUsername(e.target.value)} className='border-2' placeholder='Username' />
        <p className='text-red-700 text-xs'>{error}</p>

        



    </div>
  )
}

export default UseEffect