var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

function getRandomVector(){

    var x = Math.random()*2 - 1;
    var y = Math.random()*2 - 1;
    var len = Math.sqrt(x*x + y*y);

    return {x:x/len, y:y/len};

}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){
    //ctx.clearRect(0,0,width, height);
    var wind = {x:2,y:2};

    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomVector();
    var dx = oldx + 10*point.x+wind.x;
    var dy = oldy + 10*point.y+wind.y;    

    drawPoint(dx,dy,'blue');

    drawLine(oldx,oldy,dx,dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

