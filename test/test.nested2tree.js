const nested2Tree = require('../src/index');
const data = require('./assets/data');
const res = require('./assets/result').result;
const expect = require('chai').expect;

describe('nested2Tree', function(suite) {
	it('nested2Tree', done => {
		expect(nested2Tree(data)).to.deep.equal(res);
		done();
	});
});
