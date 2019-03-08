import getDate from '../../../lib/javascripts/Helpers/getDate';

module.exports = function() {
  describe('Date object convert to standard string', () => {
    it('should return "[month name] [full year name]"', () => {
      let dateString = '1995-12-17T03:24:00';
      expect(getDate().long(dateString)).toEqual('Dec 1995');
    });

    it('should return "[month name] [abbreviated year name]"', () => {
      let date = new Date('1995-12-17T03:24:00');
      expect(getDate().short(date)).toEqual('Dec 95');
    });
  });
};
