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
    
    //var sumX = 0;
    //for (var i=0;i<length;i++)
    var sumX = x.reduce(function(previous, current) {
        
        return previous+current;

    }, 0);
    

    //var sumY = 0;
    var sumY = y.reduce(function(previous, current) {
        
        return previous+current;

    }, 0);

    var sumXY =0;
    var sumXX =0;
    for (var i=0;i<length;i++){
        
        sumXY += x[i]*y[i];
        sumXX += x[i]*x[i];
    }
    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */


    var b = (sumXY-(sumX*sumY/10))/(sumXX-Math.pow(sumX,2)/10);
    exercise.linearRegression.b = function(){
        return b;
    };

    var a =  (sumY - b*sumX)/10;
    exercise.linearRegression.a = function(){
       // var a =  (sumY - b*sumX)/10;
        return a;
    };
    
    return function(x){ return x * b + a;};
   //return x * b + a;
    
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

