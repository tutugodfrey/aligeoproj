const assert = require('chai').assert;
const arigeo = require('../aligoejs/aligeofunc.js');

describe("aliGeo", function(){


	describe("handle invalid input", function(){

		it ("should return 0 for []", function(){
			assert.equal(arigeo([]), 0)
		});

		it ("should return 0 for []", function(){
			assert.equal(arigeo([2, 4, 5, 9, 10]), -1)
		});

	});



	describe("handle valid input", function(){

		it ("should return 0 for []", function(){
			assert.equal(arigeo([2, 4, 8, 16, 32]), "Geometric")
		});

		it ("should return 0 for []", function(){
			assert.equal(arigeo([2, 4, 6, 8, 10]), "Arithmetic")
		});

	});

		
});