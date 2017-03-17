var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector() {
    
    // to normalize a vector, divide it by its length
    // a divided by length of Math
    // a / squareroot (x2+y2)
    // any vector that you generate will still have an arbitrary direction

    var x = Math.random()*2-1;
    var y = Math.random()*2-1;
    var len = Math.sqrt(x*x + y*y);

    return {x:x/len, y:y/len};
};

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    
    var wind = 2;

    //ctx.clearRect(0,0, width, height);
    var point = getRandomUnitVector(); // only call this once
    var oldx = exercise.x[exercise.index]; // returning an object with an ex and y
    var oldy = exercise.y[exercise.index];
    var dx = oldx + point.x*20+wind;
    var dy = oldy + point.y*20+wind;

    // draw points and lines
    drawPoint(dx,dy,'green');
    drawLine(oldx, oldy, dx, dy);
    
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
    
};

