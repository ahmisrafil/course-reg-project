/* eslint-disable react/jsx-key */

import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourses, remainingCredit, totalCredit, totalPrice}) => {
    console.log(remainingCredit);

    return (
        <div className='w-60 rounded-lg mx-4'>
            <h3 className='text-base font-bold text-[#2F80ED] my-4'>Credit Hour Remaining {remainingCredit} hr</h3>
            <hr />
            <h3 className='text-xl font-bold my-4 '>Course Name</h3>

            <ol className='list-decimal'>
                {selectedCourses?.map((course) =>
                (
                    <li key={course.id}>{course.name}</li>

                ))
                }
            </ol>
            <hr />
            <h3 className='text-base font-medium my-4 text-[#1C1B1B80]'>Total Credit Hour: {totalCredit}</h3>
            <hr />
            <h3 className='text-base font-medium my-4 text-[#1C1B1B80]'>Total Price: {totalPrice} USD </h3>
        </div>
    );
};

export default Cart;

