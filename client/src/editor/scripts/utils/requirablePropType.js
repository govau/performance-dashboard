// http://blog.bradleygore.com/2015/06/24/custom-react-prop-validators/
//requirablePropType.js
//@param testFn {Function} used to test validity of the property
const requirablePropType = testFn => {
  function testProperty(props, propName, componentName) {
    var propVal = props[propName];
    var propIsEmpty = [undefined, null, ''].indexOf(propVal) > -1;
    //extract very last argument to see if this is required
    var isRequired =
      arguments.length > 3 && arguments[arguments.length - 1] === true;
    var error;

    if (isRequired === true && propIsEmpty) {
      error = new Error(
        [
          componentName,
          'requires that',
          '"' + propName + '"',
          'be populated',
        ].join(' '),
      );
    } else if (!(!isRequired && propIsEmpty)) {
      error = testFn(props, propName, componentName);
    }

    if (error !== undefined) {
      //only need to return if there's an error
      //undefined auto-returned if no return from a function
      return error;
    }
  } //end function testProperty

  //add 'isRequired' function to the testProperty function
  testProperty.isRequired = function isRequiredProp() {
    Array.prototype.push.call(arguments, true);
    return testProperty.apply(null, arguments);
  };

  return testProperty; //this is a function that also has an 'isRequired' function!
};

export default requirablePropType;
