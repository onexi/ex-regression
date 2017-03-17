var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector() { 
    var x = Math.random()*2 - 1;
    var y = Math.random()*2 - 1;
    var len = Math.sqrt(x*x + y*y);
    return {x:x/len, y:y/len};
 }

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomUnitVector();
    var dx = 2+ oldx + 10*point.x;
    var dy = 2+ oldy + 10*point.y;
    
    //var dx = exercise.x[exercise.index] + getRandomNumber();
    //var dy = exercise.y[exercise.index] + getRandomNumber();

    drawPoint(dx,dy,'red');
    drawLine(oldx,oldy,dx,dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

