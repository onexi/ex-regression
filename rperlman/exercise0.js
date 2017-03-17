var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
// random number between -10 and 10

function getRandomUnitVector(){
    var x = Math.random()*2-1;
    var y = Math.random()*2-1;
    var len = Math.sqrt(x*x + y*y);
    // divide by length to normalize vector to length of one
    return {x: x/len, y: y/len};
};
exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    // interval in millisecods for how often it's run
    setInterval(makePoint, 100);
};

var makePoint = function(){
    //ctx.clearRect(0, 0, width, height);
    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomUnitVector();
    var dx = oldx + 10*point.x + 2; //add bias of 2 for wind vector
    var dy = oldy + 10*point.y + 2;

    drawPoint(dx,dy,'orange');
    drawLine(oldx, oldy, dx, dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

