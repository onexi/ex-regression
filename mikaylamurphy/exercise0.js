var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    var oldx = exercise.x[exercise.index] + getRandomNumber();
    var oldy = exercise.y[exercise.index] + getRandomNumber();
    var vector = getRandomUnitVector();
    var dx = oldx + 10 * vector.x;
    var dy = oldy + 10 * vector.y;


    drawPoint(dx,dy,'red');
    drawLine(oldx, oldy, dx, dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

exercise.getRandomUnitVector = function(){
    var x = Math.random()*2 - 1;
    var y = Math.random()*2 - 1;
    var len = Math.sqrt(x * x + y * y);
    return {'x': x/len, 'y': y/len};
}