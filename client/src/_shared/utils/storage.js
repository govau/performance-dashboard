const HIGH_CONTRAST_MODE = 'PD_HIGH_CONTRAST_MODE';

const setItem = (name, item) => {
  try {
    const serializedItem = JSON.stringify(item);

    window.localStorage.setItem(name, serializedItem);
  } catch (err) {
    console.warn(err);
  }
};

const getItem = (name) => {
  try {
    const serializedItem = window.localStorage.getItem(name);

    if (serializedItem === null) return undefined;

    return JSON.parse(serializedItem);
  } catch (err) {
    console.warn(err);

    return undefined;
  }
};

export function setIsHighContrastMode(value) {
  setItem(HIGH_CONTRAST_MODE, value);
}

export function getIsHighContrastMode() {
  return getItem(HIGH_CONTRAST_MODE);
}
