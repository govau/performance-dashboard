var d3 = require('d3');

export default function debounceD3Event(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    var evt = d3.event;

    var later = function() {
      timeout = null;
      if (!immediate) {
        var tmpEvent = d3.event;
        d3.event = evt;
        func.apply(context, args);
        d3.event = tmpEvent;
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      var tmpEvent = d3.event;
      d3.event = evt;
      func.apply(context, args);
      d3.event = tmpEvent;
    }
  };
}
