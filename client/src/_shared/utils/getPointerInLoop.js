
const getPointerInLoop = (groupLength, increment) => {
  if (increment < groupLength) {
    return increment;
  } else {
    return increment % groupLength;
  }
};

export default getPointerInLoop;
