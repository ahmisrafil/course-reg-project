/* eslint-disable react/no-unknown-property */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const handleSelect = (course) => {
        console.log(course);
    }

    return (
        <div className='grid grid-cols-1 gap-2  lg:grid-cols-3'>
            {
                courses.map(course => (
                    <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={course.image} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{course.name}</h2>
                            <p className='text-base text-[#1C1B1B99]'>{course.details}</p>
                            <div className='flex flex-row gap-2'>
                                <p className='text-base text-[#1C1B1B99]'>$ Price: {course.price}</p>

                                <p className='text-base text-[#1C1B1B99]'>Credit: {course.credit}hr</p>
                            </div>
                            <div className="card-actions">
                                <button onClick={()=>handleSelect(course)} className='bg-[#2F80ED] px-24 py-2 rounded-md text-[#FFF] font-semibold text-lg'>Select</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Home;