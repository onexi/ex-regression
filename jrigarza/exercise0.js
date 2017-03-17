var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector() {

    var x = Math.random()*20-10;
    var y = Math.random()*20-10;

    var wind = {x: 2, y: 2};

    x = x+wind.x;
    y = y+wind.y;

    var length = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));

    

    return {x: x/length, y: y/length};

}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    //ctx.clearRect(0,0,width,height);
    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomUnitVector();
    var dx = oldx + point.x * 10;
    var dy = oldy + point.y * 10;

    drawPoint(dx,dy,'red');
    drawLine(oldx, oldy, dx, dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};




