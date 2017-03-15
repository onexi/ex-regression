var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}
function getRandomUnitVector(){
    var x = Math.random()-0.5;
    var y = Math.random()
    var len = Math.sqrt(x*x + y*y); //calculate the length based on the pythagorean theorm

    return {x:x/len,y:y/len}; //divide x and y by the length (this is "normalizing a vector")
};

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

var makePoint = function(){

    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    var point = getRandomUnitVector(); 
    var dx = oldx + point.x*20;
    var dy = oldy + point.y*20;

  drawPoint(dx,dy,'red');
  drawLine(oldx, oldy, dx, dy);
 
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

