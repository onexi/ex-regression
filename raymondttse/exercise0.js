var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    //ctx.clearRect(0,0,400,400);
    var prevX = exercise.x[exercise.index];
    var prevY = exercise.y[exercise.index];
    var delta = getRandomUnitVector();
    var dx = prevX + 10*delta.x;
    var dy = prevY + 10*delta.y;

    drawPoint(dx,dy,'red');
    drawLine(prevX, prevY, dx, dy);
    
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

var getRandomUnitVector = function (){
    var x = getRandomNumber() -0.5;
    var y = getRandomNumber() -0.5;
    var denom = Math.sqrt(Math.pow( x, 2) + Math.pow(y, 2));

    return {x:x/denom , y:y/denom};
};