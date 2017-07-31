const assert = require('chai').assert;
const aligeotest = require('../aligoejs/aligeofunc.js');

describe("aliGeo", function(){

	describe("handle valid input", function(){
		it ("should return 'Arithmetic' for [2, 4, 6, 8, 10, 12, 14]", function(){
			assert.equal(aligeotest.computealiGeo([2, 4, 6, 8,10,12, 14]), "Arithmetic");
		});

		it ("should return 'Geometric' for [2, 4, 6, 8, 10, 12, 14]", function(){
			assert.equal(aligeotest.computealiGeo([2, 4, 8, 16, 36, 72, 144]), "Geometric");
		});

		

	})

	describe("handle invalid input", function(){

		it ("should return '0' for []", function(){
			assert.equal(aligeotest.computealiGeo([]), "Arithmetic");
		});

		it ("should return 'term' for [4]", function(){
			assert.equal(aligeotest.computealiGeo([4]), "term");
		});

	})
})