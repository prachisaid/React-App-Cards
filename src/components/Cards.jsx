import React, { useState } from "react";
import Card from "./Card";

function Cards({name, category}) {

  const [likedCourses, setLikedCourses] = useState([])

  const getCourses = () => {
    if(category == "All") {
      let allCourses = [];
      // console.log("Printing courses values");
  
      Object.values(name).map((array) => {
          Object.values(array).map((course) => {
              course.forEach((c) => {
                allCourses.push(c);
              });
          })
      });
  
      return allCourses;
    }
    else {
      return name.data[category]
    }
  };

  return (
    <div className="cards">
        {getCourses().map((data) => {
          return (
            <Card key={data.id} course={data} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
          );
        })}
    </div>
  );
}

export default Cards;
