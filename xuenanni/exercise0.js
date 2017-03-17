var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector(){
    var x = Math.random()*2-1; //since random only gives 0-1;if not *2-1, we can only get positives
    var y = Math.random()*2-1;
    var len = Math.sqrt(x*x+y*y);
    return {x:x/len,y:y/len};
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
    var dx = oldx + 2 + 10*point.x;
    var dy = oldy + 2 + 10*point.y;

    drawPoint(dx,dy,'red');
    drawLine(oldx,oldy,dx,dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

