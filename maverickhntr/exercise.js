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
    //sumX = x.reduce((previous, current){return previous + current},0);
    var sumY = 0;
    //sumY = y.reduce((previous, current){return previous + current},0);
    var sumXY  = 0;
    //XY = x.map(function(element){x*y});
    //sumXY = XY.reduce((previous, current){return previous + current},0);
    var sumXX = 0;
    var n = x.length;
    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */
     for (var i = 0; i< x.length; i++)
     {
         sumX += x[i];
         sumY += y[i];
         sumXY += x[i]*y[i];
         sumXX += x[i]*x[i];
     }

     
    var b = (sumXY - (sumX*sumY/n))/(sumXX-((sumX*sumX)/n));
    var a = ((sumY-(sumX*b))/n);
    console.log(b);
    console.log(a);

    // var b =
    exercise.linearRegression.b = function(){
        return b;
    };

    // var a =
    exercise.linearRegression.a = function(){
        return a;
    };

    return function(x){ return x * b + a};
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
        //x[i] = i;
        //y[i] = i + 1;
        //x[i] = i;
        //y[i] = 2*i + 0.5;
    }

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x,y,lr);
};

