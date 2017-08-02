const assert = require('chai').assert;
const aritGeo = require('../aligoejs/aligeofunc.js');

describe("aritGeo", function(){


	describe("handle invalid input", function(){

		it ("should return 0 for []", function(){
			assert.equal(aritGeo([]), 0)
		});

		it ("should return -1 for []", function(){
			assert.equal(aritGeo([2, 4, 5, 9, 10]), -1)
		});


	});



	describe("handle valid input", function(){

		it ("should return Geometric for [2, 4, 8, 16, 32]", function(){
			assert.equal(aritGeo([2, 4, 8, 16, 32]), "Geometric")
		});

		it ("should return Arithmetic for [2, 4, 6, 8, 16]", function(){
			assert.equal(aritGeo([2, 4, 6, 8, 10]), "Arithmetic")
		});

	});

		
});