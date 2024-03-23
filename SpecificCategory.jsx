import React, { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom'
import'../Project Recipe2/Spc.css'

import { useNavigate } from 'react-router-dom'
function SpecificCategory() {
  const location=useLocation()
  const data=location.state.item

  const [datas,setDatas]=useState([])

  const navigate=useNavigate()

  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`)
    .then(res=>res.json())
    .then(d=>{
        setDatas(d.meals)
        console.log(d)
    })
  },[])

  return (
    <div className='Spc'>
        <section className="spcsec">
            <div className="right">
                <img src={data.strCategoryThumb}  width={'100%px'} />


            </div>
            <div className='left'>
                <h1>{data.strCategory}</h1>
                <p>{data.strCategoryDescription}</p>
            </div>
            
        </section>
        <br />
        <section className='sec2'>
            {
                datas.map((item)=>{
                    return(
                        <div className='secdiv' key={item.idMeal}>
                            <img onClick={()=>navigate('/meals',{state:{item}})} src={item.strMealThumb} alt=""  height={'200px'} width={'200px'}/>
                            <p>{item.strMeal}</p>

                        </div>
                    )
                })
            }

        </section>

    </div>
  )
}

export default SpecificCategory
