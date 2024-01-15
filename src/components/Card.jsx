import React from 'react';
import { FcLike , FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';

function Card(props) {
    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if(likedCourses.includes(course.id)) {
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)))
            toast.warning("Like removed")
        }
        else{
            if(likedCourses.length == 0) {
                setLikedCourses([course.id])
            }   
            else{
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Successfully liked");
        }
    }

    return(
        <div className='card-main'>
            <div>
                <img src={course.image.url} alt={course.image.alt}></img>
            </div>
            <div>
                <button className='heart' onClick={clickHandler}> 
                    {
                        likedCourses.includes(course.id) ?
                        <FcLike fontSize={"1.79rem"}/> :
                        <FcLikePlaceholder fontSize={"1.79rem"} />
                    }
                </button>
            </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description.length > 100 ? 
                    (course.description.substr(0, 100)) + "..." :
                    (course.description)
                    }</p>
            </div>
        </div>
    )
}

export default Card;