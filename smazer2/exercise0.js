var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var getRandomUnitVector = function(){

    var x1= getRandomNumber();
    var y1= getRandomNumber();
    var length = Math.sqrt(x1*x1+y1*y1);
    x1 = x1/length;
    y1 = y1/length;
    return {
        x: x1,
        y: y1
    }
    
};

var makePoint = function(){
   var oldx = exercise.x[exercise.index] + getRandomNumber();
   var oldy = exercise.y[exercise.index] + getRandomNumber();
   var point = getRandomUnitVector();
   var dx = exercise.x[exercise.index] + 50*point.x;
   var dy = exercise.y[exercise.index] + 50*point.y;


    drawPoint(dx,dy,'red');
    drawLine(dx, dy, oldx, oldy, 'red');
    exercise.x.push(dx); exercise.y.push(dy);
   exercise.index++;

    
    ///exercise.x.push(dx); exercise.y.push(dy);
    //exercise.x.push(oldx); exercise.y.push(oldy);
    //exercise.index++;
};

