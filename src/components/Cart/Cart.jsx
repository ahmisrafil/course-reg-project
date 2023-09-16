/* eslint-disable react/jsx-key */

import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourses }) => {

    return (
        <div className='w-60 rounded-lg mx-4'>
            <h3 className='text-lg font-bold text-[#2F80ED] my-4'>Credit Hour Remaining </h3>
            <hr />
            <h3 className='text-xl font-bold my-4 '>Course Name</h3>

            <ol className='list-decimal'>
                {selectedCourses?.map((course) =>
                //     {
                //     console.log(course.name);
                // }
                (
                    <li>{course.name}</li>

                ))
                }
            </ol>
            <hr />
            <h3 className='text-base font-medium my-4 text-[#1C1B1B80]'>Total Credit Hour: </h3>
            <hr />
            <h3 className='text-base font-medium my-4 text-[#1C1B1B80]'>Total Price:  </h3>
        </div>
    );
};

export default Cart;

