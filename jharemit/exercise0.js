var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector() {
    var x = Math.random()*2 - 1;
    var y = Math.random()*2 - 1;
    var wind = 2;
    var length = Math.sqrt(x*x+y*y);
    return{x: 20*x/length+wind, y: 20*y/length+wind};
}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    //ctx.clearRect(0,0,width, height);
    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomUnitVector();
    var dx = oldx + point.x;
    var dy = oldy + point.y;

    drawPoint(dx,dy,'red');
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;

    drawLine(oldx,oldy,dx,dy);
};

