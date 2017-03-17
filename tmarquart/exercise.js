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
    var n=x.length;

    function sumProduct(array1, array2) {
        var sum = 0;
        for (var i = 0; i < array1.length; i++) {
            sum += array1[i] * array2[i];
        }
        return sum;
    }

    function sum(array){
        return array.reduce(function(total,item){
            return total+item;
        },0);
    }

    sumXY=sumProduct(x,y);
    sumXX=sumProduct(x,x);
    sumX=sum(x);
    sumY=sum(y);

    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */
    var m=(sumXY-sumX*sumY/n)/(sumXX-sumX*sumX/n);
    var b=(sumY-m*sumX)/n;
    //console.log(m);
    //console.log(b);

    // var b =
    // exercise.linearRegression.b = function(){
    //     var b=5;
    //     return b;
    // };

    // // var a =
    // exercise.linearRegression.a = function(){
    //     var a=2;
    //     return a;
    // };

    exercise.linearRegression.b=m;
    exercise.linearRegression.a=b;
    
    return function(x){
        return y=m*x+b;
    }
    //return;
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

