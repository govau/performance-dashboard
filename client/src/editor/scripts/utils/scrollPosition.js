
// todo - deprecate - use jump.js instead

/**
 * Gets the element's y position relative to document.body
 * @param element <Element>
 * @returns <Number> yOffset - value in pixels
 */
export const getElementY = element => {
  // get the position in window in the current browser screen boundary
  const screenY = element.getBoundingClientRect().top;

  // get the scroll offset from top of body to top of screen boundary and
  // add that to rect. Assume parent element is document.body as that is
  // the page scroll region
  return Number(screenY + document.body.scrollTop);
};

/**
 * Scrolls to a y position, assuming y was calculated by getElementY and
 * document.body is the page scrolling element
 * @param y {Number}
 */
export const scrollToY = y => {
  document.body.scrollTop = y;
};
