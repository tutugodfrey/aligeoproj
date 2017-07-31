const assert = require('chai').assert;
const app= require('../aligoejs/aligeofunc.js');

describe("aliGeo", function(){

	describe("handle valid input", function(){
		it ("should return 0 for []", function(){
			assert.equal(app.arigeo([]), 0);
		});
	});
	describe("handle valid input", function(){
		it ("should return 0 for [2, ]", function(){
			assert.equal(app.arigeo([2, 4, 6, 8, 10]), 2);
		});
	});
	describe("handle valid input", function(){
		it ("should return 0 for [2]", function(){
			assert.equal(app.arigeo([2, 4, 8, 16, 32]), 2);
		});
	});
	describe("handle valid input", function(){
		it ("should return 0 for [2]", function(){
			assert.equal(app.arigeo("term"), -1);
		});
	});

})