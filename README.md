# Project Features

- This project includes online course registration process.
- Maximum credit limit is 20, exceeding this limit will show a toast notification 
- Selecting a course multiple time is not allowed. Doing this will also  show a toast notification giving warning. 


# The process of managing state in the Assignment

The states are used to keep track of various applications. Such as: 
-  'courses' This state is initialized as an empty array using useState which will hold the list of available courses.
- 'selectedCourses' state will keep track of the courses that the user has selected.
- 'remainingCredit' state is initialized with a value of 20,representing the remaining credit limit for the user.
- 'totalPrice' state will store the total price of the selected courses.
- 'totalCredit' state will store the total credit hours of the selected courses.