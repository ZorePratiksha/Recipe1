


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

function Meals() { // Changed from Meal to Meals
  const location = useLocation();
  const data = location.state.item;

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data based on data.idMeal
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`
        );
        const result = await response.json();
        setDatas(result.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data.idMeal]);

  console.log(datas);
  console.log(data);

  return (
    <div>
      <section style={{ display: "flex", width: "100%" }}>
        <div className="right" style={{ width: "50%" }}>
          <img src={data.strMealThumb} alt="" style={{ width: "400px" }} />
        </div>
        <div className="left">
          <h1>{data.strMeal}</h1>
        </div>
      </section>

      <div>
        {/* Check if datas is an array before mapping */}
        {Array.isArray(datas) &&
          datas.map((item) => (
            <div key={item.idMeal}>
              <h1>{item.strMeal}</h1>
              <h3>{item.strCategory}</h3>
              <p>{item.strInstructions}</p>

              <ReactPlayer url={item.strYoutube} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Meals; // Changed from Meal to Meals


