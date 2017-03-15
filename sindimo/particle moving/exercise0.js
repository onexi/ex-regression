var exercise = {};

//Getting a random number between -10 and +10
function getRandomNumber()  { return (Math.random()*20-10);}

//Written in class by John, any vector you generate that is not 1 will be normalized and be 1 but in random direction
function getRandomUnitVector()  { 

    //Equation to use:
    // x / (sqrt(x^2 + y^2))

    //Get a number between - something and + something
    var x = Math.random() * 2 - 1;
    var y = Math.random() * 2 - 1;

    //Calculate length
    var len = Math.sqrt(x*x + y*y);

    //Return an object with x and y, this should be 1 normalized
    return {x: x/len, y:y/len};

}


exercise.run =  function (){

    exercise.index = 0;

    //This is our starting point (x,y) = (400,400)
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);

};

var makePoint = function(){

    //This clears the canvas every call and you only draw the new point without accumulating 
    //ctx.clearRect(0,0,width, height); 

    var old_x = exercise.x[exercise.index];
    var old_y = exercise.y[exercise.index];

    //var dx = old_x + getRandomNumber();
    //var dy = old_y + getRandomNumber();

    //You can make the movement biased by adding wind, add a wind vector 'w' to diffusion vector 'a'
    //w = 

    //Multiply it by some number 10 just to make it easier to display
    var point = getRandomUnitVector();
    var dx = old_x + 10 * point.x;
    var dy = old_y + 10 * point.y;

    drawLine(old_x,old_y, dx,dy);
    drawPoint(dx,dy,'red');

    exercise.x.push(dx); 
    exercise.y.push(dy);

    exercise.index++;
};

