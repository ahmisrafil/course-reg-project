/* eslint-disable react/no-unknown-property */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState(20);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    console.log(remainingCredit);
    console.log(totalPrice);
    console.log(totalCredit);


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const handleSelect = (course) => {
        const isExist = selectedCourses.find(courseName => courseName.id == course.id);
        let credit = course.credit;
        let price = course.price;

        




        if (isExist) {
            return notifyCourse();
        }
        else {
            selectedCourses.forEach((course) => {
                credit = credit + course.credit;
                price = price + course.price;
            });
            if (credit > 20) {
                return notifyCredit();
            }
            else {
                setTotalCredit(credit);
                setTotalPrice(price);
                const creditRemaining = 20 - credit;
                setRemainingCredit(creditRemaining);
                setSelectedCourses([...selectedCourses, course]);
            }


        }
    }

    const notifyCourse = () =>{
        toast.error('Course has already taken !', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });    
    };
    const notifyCredit = () =>{
        toast.error('You can not exceed your credit limit', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });    
    };

    return (
        <div className='flex flex-row gap-4'>
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
                                    <button onClick={() => handleSelect(course)} className='bg-[#2F80ED] px-24 py-2 rounded-md text-[#FFF] font-semibold text-lg'>Select</button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Cart
                selectedCourses={selectedCourses}
                remainingCredit={remainingCredit}
                totalCredit={totalCredit}
                totalPrice={totalPrice}
            ></Cart>
        </div>
    );
};

export default Home;