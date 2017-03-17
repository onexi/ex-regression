var exercise = {};

function getRandomNumber() { return (Math.random() * 20 - 10); }

function getRandomUnitVector() {
    var vector = { x: getRandomNumber(), y: getRandomNumber() };
    var len = math.sqrt(vector.x * vector.x + vector.y * vector.y);
    return { x: vector.x / len, y: vector.y / len };

};

exercise.run = function () {
    exercise.index = 0;
    exercise.x = [400];
    exercise.y = [400];
    var wind = { x: 10, y: 5 };
    setInterval(makePoint(wind), 10);
};



var makePoint = function (wind) {
    var oldx = exercise.x[exercise.index];
    var oldy = exercise.y[exercise.index];
    //var dx = exercise.x[exercise.index] + getRandomNumber();
    //var dy = exercise.y[exercise.index] + getRandomNumber();
    var point = getRandomUnitVector();
    var dx = oldx + 10 * point.x;
    var dy = oldy + 10 * point.y;


    drawPoint(dx + wind.x, dy + wind.y, 'red');
    drawLine(oldx, oldy, dx + wind.x, dy + wind.y);

    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;
};

