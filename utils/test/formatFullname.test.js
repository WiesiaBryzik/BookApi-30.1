const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "fullname" arg is undefined', () => {
        expect(formatFullname(undefined)).to.equal('Error');
    });

    it('should return an error if "fullname" arg is not a string', () => {
        expect(formatFullname(20)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () { })).to.equal('Error');
    });

    it('should return an error if "fullname" arg has different format', () => {
        expect(formatFullname('Amanda')).to.equal('Error');
        expect(formatFullname('Amanda Sandra Paranda')).to.equal('Error');
        expect(formatFullname('Amanda Paranda')).to.equal('Amanda Paranda');
        expect(formatFullname('AmaNDa ParaNDa')).to.equal('Amanda Paranda');
    });
    
});