import React, { useEffect, useState } from 'react'
import '../Project Recipe2/Navbar.css'
import Category from './Category'

function Home() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res=>res.json())
        .then(d=>setData(d.meals))
    },[])

  return (
    <div>
        {
            data.map((item)=>{
                return(
                    <div className='Cards' key={item.idMeal} style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                        <div className='right'>
                            <h1 className='h11'>Today's special Dish</h1>
                            <h1 className='h11' style={{color:'orange'}}>{item.strMeal}</h1>
                            <h1 className='h11'>{item.strArea}</h1>
                            
                        </div>
                        <div className='left'>
                      <img src={item.strMealThumb} style={{borderRadius:'50%',width:'400px' ,height:'400px'}}></img>
                        </div>
                    </div>
                )

            })
        }
        <Category></Category>

    </div>
  )
}

export default Home