var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);
};

function getRandomUnitVector(){
    var rawx=Math.random()*2-1;
    var rawy=Math.random()*2-1;
    var unitX=rawx/Math.sqrt(rawx*rawx+rawy*rawy)*10;
    var unitY=rawy/Math.sqrt(rawx*rawx+rawy*rawy)*10;
    return {x:unitX,y:unitY};
}

var makePoint = function(){
    var vec=getRandomUnitVector();
    var wind={x:2,y:2};
    var dx = exercise.x[exercise.index] + vec.x+wind.x;
    var dy = exercise.y[exercise.index] + vec.y+wind.y;

    drawPoint(dx,dy,'red');
    drawLine(exercise.x[exercise.index],exercise.y[exercise.index],dx,dy);
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

