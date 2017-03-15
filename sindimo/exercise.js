var exercise = {};

exercise.linearRegression = function (x,y){
    /*
    Inputs:
    x - array of all x coordinates of raw data
    y - array of all y coordinates of raw data

    Outputs: a function that returns the y coordinate
            on the best fit line given an x coordinate
    Output should take the form return function(x){ return y}

    */


    /*
     * Calculate a and b for the formula:
     * y = x * b + a
     */

    //Using least squares method

    //Find how many points we have
    var n = y.length;

    //Initalize everything to 0
    var sumX  = 0;
    var sumY  = 0;
    var sumXY = 0;
    var sumXX = 0;
    
    //Calculate sums needed later to calculate the slope and intercept
	for (var i=0; i<n; i++) {
			
			sumX  += x[i];
			sumY  += y[i];
			sumXY += (x[i]*y[i]);
			sumXX += (x[i]*x[i]);
	} 

    //Calculate slope using equation in power point slides
    var b = ( sumXY   - ( (sumX*sumY)  /  n  )  )      /   ( sumXX  -  ((sumX*sumX)/n) ) ;

    //Calcualte y-intercept
    var a = ( sumY - (b * sumX) ) / n;


    //Assign slope 'b' and y-intercept 'a' values to linearRegression object
    exercise.linearRegression.b = function(){
        return b;
    };

    exercise.linearRegression.a = function(){
        return a;
    };




    //A function that returns the predicted value y when it's given a new never befoe seen value x
    var my_lr = function lr(x_value){
    
        var y_predicted = a +  b*x_value;

        return y_predicted;
    };


    //Return our function 
    return my_lr;

};



function getRandomNumber()  { return Math.floor(Math.random()*100);}

exercise.run =  function (){
    var x  = [];
    var y  = [];
    var lr = [];
    var length = 10;

    // get random points
    for (var i=0; i<length; i++){
        x[i] = getRandomNumber();
        y[i] = getRandomNumber();
    }

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x,y,lr);
};

