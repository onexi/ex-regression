var exercise = {};

function getRandomNumber()  { return (Math.random()); }

exercise.run =  function (){
    console.log('run');
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];
    
    
    setInterval(makePoint, 100);
};

var makePoint = function(){
    //ctx.clearRect(0,0,400,400);
    var oldX = exercise.x[exercise.index];
    var oldY = exercise.y[exercise.index];
    var delta = getRandomUnitVector();
    var dx = oldX + 10*delta.x;
    var dy = oldY + 10*delta.y;

    drawPoint(dx,dy,'red');
    drawLine(oldX, oldY, dx, dy);
    
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

var getRandomUnitVector = function (){
    var x = getRandomNumber() -0.5;
    var y = getRandomNumber() -0.5;
    var denom = Math.sqrt(Math.pow( x, 2) + Math.pow(y, 2));

    return {x:x/denom , y:y/denom};
};

