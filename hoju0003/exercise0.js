var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

function getRandomUnitVector() { 

	var x= Math.random()*2-1;
	var y= Math.random()*2-1;
	var len=Math.sqrt(x*x+y*y);
	
	return {x:x/len, y:y/len};
	
	
}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
	
	//clear canvas
	 //ctx.clearRect(0,0,width, height);
	
	
	
/*     var dx = exercise.x[exercise.index] + getRandomNumber();
    var dy = exercise.y[exercise.index] + getRandomNumber(); */
	
	var point= getRandomUnitVector();
	
	//include x and y bias to account for wind
	var xBias=2;
	var yBias=2;
	
	
	
	var dx = exercise.x[exercise.index] + xBias+ 10*point.x; ;
    var dy = exercise.y[exercise.index] + yBias+ 10*point.y; ;
	
	//draw dot

    //drawPoint(dx,dy,'red');
	
	//draw line
	drawLine(exercise.x[exercise.index],exercise.y[exercise.index],dx,dy);
	
	
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

