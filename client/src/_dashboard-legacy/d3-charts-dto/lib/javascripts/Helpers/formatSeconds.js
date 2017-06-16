/**
 * @function convertFromSeconds
 * @param  {Object} value [description]
 * @return {Boolean}       [description]
 */
const formatSeconds = function (value) {
    let second = 0;
    let minute = '';
    let hour = '';

    if (value < 60) {
        second = `${String(value)}s`;
    } else if (60 <= value && value < 3600) {
        let sec = Math.floor(value % 60);
        let min = Math.floor(value / 60);
        second = sec < 10 ? `0${sec}s` : `${sec}s`;
        minute = min < 10 ? `0${min}m` : `${min}m`;
    } else if (3600 <= value) {
        var minRaw = Math.floor(value / 60);
        var h = Math.floor(value / 3600);
        var min = Math.floor(minRaw % 60);
        var sec = Math.floor(value % 60);
        second = sec < 10 ? `0${sec}s` : `${sec}s`;
        minute = min < 10 ? `0${min}m` : `${min}m`;
        hour = h < 10 ? `0${h}h` : `${h}h`;
    }
    return hour + minute + second;
};

module.exports = formatSeconds;

