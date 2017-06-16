import d3 from 'd3';
/**
 * @function getDate
 * @return {String} [description]
 */
const getDate = function getDate() {
  function convertToDate(_date) {
    return isNaN(new Date(_date).getDate()) ? new Date() : new Date(_date);
  }
  return {
    short: (date)=> d3.time.format('%b')(convertToDate(date)) + ' ' + d3.time.format('%y')(convertToDate(date)),
    long: (date)=> d3.time.format('%b')(convertToDate(date)) + ' ' + d3.time.format('%Y')(convertToDate(date))
  };
};

module.exports = getDate;
