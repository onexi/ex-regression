var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);} //gets random number around 20, +- 10 in either x or y direction
function getRandomUnitVector(){
    var x = Math.random()*2 - 1; //this *2 - 1 allows for negative x values because .random generats random value from 0-1.
    var y = Math.random()*2 - 1;
    var len = Math.sqrt(x*x + y*y);

    return {x:x/len, y:y/len};//normalizes to 1
}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    //ctx.clearRect(0,0,width,height);
    var oldx = exercise.x[exercise.index]; //previously included  + getRandomNumber()
    var oldy = exercise.y[exercise.index]; //previously included  + getRandomNumber()
    var point = getRandomUnitVector();
    var dx = oldx + 10*point.x;
    var dy = oldy + 10*point.y;

    drawPoint(dx,dy,'red');
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

