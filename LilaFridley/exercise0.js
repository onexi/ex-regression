var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

function getRandomUnitVector() {
    var x = Math.random()*2-1;
    var y = Math.random()*2-1;
    var len = Math.sqrt(x*x + y*y);
    return {x: (x)/len, y: (y)/len};
}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    var point = getRandomUnitVector();
    var dx = exercise.x[exercise.index] + 10*point.x +2;
    var dy = exercise.y[exercise.index] + 10*point.y +2;

    drawPoint(dx,dy,'red');
    drawLine(exercise.x[exercise.index], exercise.y[exercise.index], dx, dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

