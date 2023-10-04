import {useState} from 'react'


const UseState = () => {


    // var [n,g] = ["Ali Raza","Male"]
    // console.log(n,g)

    // var [num,setNum] = useState(5)

    var [color,setColor] = useState("")

    console.log("lahore")


    // var num = 1

  return (
    <div>


        {/* <button onClick={()=>{num=num+1;console.log(num)}}>+</button> */}
        {/* <h1>{num}</h1> */}

        {/* <h2>{num}</h2>
        <button onClick={()=>setNum(10)}>+</button> */}





        <h1 style={{color:color}} >{color}</h1>
        <input type="text" placeholder='Color' onChange={(e)=>setColor(e.target.value)} className='border-2 border-red-600' />



        <input type="text" placeholder='Password' className='border-2 border-red-600' />

    </div>
  )
}

export default UseState