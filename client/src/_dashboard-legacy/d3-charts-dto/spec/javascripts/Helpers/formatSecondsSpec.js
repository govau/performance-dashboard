import formatSeconds from '../../../lib/javascripts/Helpers/formatSeconds';

module.exports = function() {
  describe('format data from seconds', () => {
    it('should return "1min 30secs"', () => {
      let s = 90;
      expect(formatSeconds(s)).toEqual('01m30s');
    });

    it('should return "30 seconds"', () => {
      let s = 30;
      expect(formatSeconds(s)).toEqual('30s');
    });

    it('should return "59 seconds"', () => {
      let s = 59;
      expect(formatSeconds(s)).toEqual('59s');
    });

    it('should return "1 minute"', () => {
      let s = 60;
      expect(formatSeconds(s)).toEqual('01m00s');
    });

    it('should return "00:00"', () => {
      let s = 0;
      expect(formatSeconds(s)).toEqual('0s');
    });

    it('should return "1 hour"', () => {
      let s = 3600;
      expect(formatSeconds(s)).toEqual('01h00m00s');
    });

    it('should return "1 seconds less than an hour"', () => {
      let s = 3599;
      expect(formatSeconds(s)).toEqual('59m59s');
    });

    it('should return "1 seconds less than an hour"', () => {
      let s = 90000;
      expect(formatSeconds(s)).toEqual('25h00m00s');
    });
  });
};
