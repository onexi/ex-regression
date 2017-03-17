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

    var sumX = 0;
    var sumY = 0;
    var sumXY  = 0;
    var sumXX = 0;

    for(var i=0; i<x.length; i++){
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i]*y[i];
        sumXX += x[i]*x[i];
    }
    // sumX = x.reduce(function(a, b){
    //     return a+b;
    // },0);

    // sumY = y.reduce(function(a, b){
    //     return a+b;
    // },0);
    // var sumXY_arr = [];
    // for(var i=0; i<x.length; i++){
    //     sumXY_arr.push(x[i]*y[i]);
    // }
    // sumXY = sumXY.reduce(function(a, b){
    //     return a += b;
    // }, 0);
    // var sumXX_arr = [];
    // sumXX_arr = sumX.map(function(x){
    //     return x*x;
    // });
    // sumXX = sumXX_arr.reduce(function(a, b){
    //     return a+=b;
    // }, 0);



    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */


    // var b =
    var b = (sumXY - sumX*sumY/x.length)/(sumXX-sumX*sumX/x.length);
    exercise.linearRegression.b = function(){        
        return b;
    };

    // var a =
    var a  = (sumY-b*sumX)/x.length;
    exercise.linearRegression.a = function(){       
        return a;
    };

    return function(x){
        // console.log(b);
        // console.log(a);
        return b*x +a;
        
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
        // x[i] = i;
        console.log(i);
        // y[i] = i+1;
        console.log(i+1);
    }

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x,y,lr);
};

