# ex-regression-prof

In this exercise, you will create a JS function that takes arrays of x and y coordinates of raw data and returns a function that can calculate the y of the best fit line given an x. Use the least squares method to calculate the best fit line.

## Intputs: x - array of all x coordinates of raw data, y - array of all y coordinates of raw data
## Outputs: a function that returns the y coordinate on the best fit line given an x coordinate
Output should take the form return function(x){ return y}

### Remember: y = a + bx

Steps necessary to complete this exercise:
- Work through the lecture material addressing the topic of Regression (http://onexi.org/jrw/L14_MachineLearning/slides.html)
- Understand how a and b are calculated (will return values for them in the exercise)
- Complete the linearRegression function in exercise.js in such a way that it stores the value of a & b and returns the function listed in Outputs
- Test your code and see if it works as intended by either opening the file run.html in your web browser (open developer console), or by using the commands 'npm install' and 'npm test'