var expect = require('chai').expect;
var ex = require('./ex.js').load('./exercise.js');

var x = [1,1,1,5];
var y = [0,4,3,2];

var line = ex.linearRegression(x,y);

describe('Linear Regression Grader', function() {

	it('Correct b value', function() {

		var b_solution = -0.08333333333333333;
		var b_answer = ex.linearRegression.b();
	    expect(b_answer).to.equal(b_solution);

	});

	it('Correct a value', function() {

		var a_solution = 2.4166666666666665;
		var a_answer = ex.linearRegression.a();
	    expect(a_answer).to.equal(a_solution);

	});

	it('Returns a function', function(){
		expect(line).to.be.a('function');
	});

	it('Correct y value, given an x', function() {

		var y_solution = 2;
		var x_given = 5;
		var y_answer = line(5);

	    expect(y_answer).to.equal(y_solution);

	});
});
