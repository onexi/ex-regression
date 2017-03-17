var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector(){
    // This function return a unit vector
    var x = Math.random() *2 -1; // x is a random number between -1 and 1
    var y = Math.random() * 2 -1;
    var len = Math.sqrt(x * x + y * y);
    return {x: x/len, y:y/len};
}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    // ctx.clearRect(0,0,width, height); // This clear previous data point
    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomUnitVector();
    var dx = exercise.x[exercise.index] + 20 * point.x;
    var dy = exercise.y[exercise.index] + 20 * point.y;

    drawPoint(dx,dy,'red');
    drawLine(oldx,oldy,dx,dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

