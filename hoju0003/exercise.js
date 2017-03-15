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

    var sumX = x.reduce(function(prev,curr){return prev+curr},0);
    var sumY = y.reduce(function(prev,curr){return prev+curr},0);
	
	var arrayXY= [];
	var arrayXX= [];
	
	x.forEach(function(item,i,wholething){
		
		arrayXY.push(x[i]*y[i]);
		
	});
	
	x.forEach(function(item,i,wholething){
		
		arrayXX.push(x[i]*x[i]);
		
	});
	
	
	
    var sumXY  = arrayXY.reduce(function(prev,curr){return prev+curr},0);
    var sumXX = arrayXX.reduce(function(prev,curr){return prev+curr},0);
	var n= x.length;
	
	b= (sumXY-(sumX*sumY/n))/(sumXX-(sumX*sumX/n));
	a=(sumY-(b*sumX))/n;
	
	

    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */


    // var b =
    exercise.linearRegression.b = function(){
		
		b= (sumXY-(sumX*sumY/n))/(sumXX-(sumX*sumX/n));
        return b;
    };

    // var a =
    exercise.linearRegression.a = function(){
		
		a=(sumY-(b*sumX))/n;
        return a;
    };


	return function(x1){
		
		var y1= b*x1+a;
		return y1;
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

