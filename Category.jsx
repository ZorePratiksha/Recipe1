import React, { useEffect, useState } from 'react'
import '../Project Recipe2/Category.css'
import { useNavigate } from 'react-router-dom'

function Category() {
    const[cat,setCat]=useState([])
  

    const navigate=useNavigate()
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then((d)=>setCat(d.categories))
    },[])
  return (
    <div className="Category">
        <h1 style={{textAlign:'center'}}>Category</h1>
        <section className='sec'>
          

       
          {
            cat.map((item)=>{
                return(
                    <div className="cards" key={item.idCategory}>
                        <img  onClick={()=>navigate('/SpecificCategory',{state:{item}})} className="img2"src={item.strCategoryThumb} alt='' height={'300px'} width={'300px'} style={{borderRadius:'50%'}}></img>
                    </div>
                )

            })
          }
           </section>
    </div>
  )
}

export default Category