var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector(){
    var x = Math.random()*2-1;
    var y = Math.random()*2-1;
    var len = Math.sqrt(x*x+y*y);

    return {x: x/len, y:y/len};
}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 40);
};

var makePoint = function(){
    
    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomUnitVector();
    var dx = oldx +10*point.x +2;
    var dy = oldy + 10*point.y +2;
    drawLine(oldx, oldy, dx, dy);

    //drawPoint(dx,dy,'red');
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

