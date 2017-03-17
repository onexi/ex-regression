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
    var sumX=0;
    var sumY=0;
    var sumXY=0;
    var sumXX=0;
    var n=x.length;
    for (var i=0; i<x.length;i++){
        sumX +=x[i];
        sumY +=y[i];
        sumXY+=x[i]*y[i];
        sumXX+=x[i]*x[i];
    }



    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */


    var b = (sumXY - sumX*sumY/n)/(sumXX - sumX*sumX/n);
    exercise.linearRegression.b = function(){
        return b;
    };

    var a = (sumY - exercise.linearRegression.b()*sumX)/n;
    exercise.linearRegression.a = function(){
        return a;
     };

    return function(x){ 
        return x*exercise.linearRegression.b() + exercise.linearRegression.a(); 
    };
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
        // x[i]=i;
        // y[i]=2*i+1;

    }

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x,y,lr);
};

