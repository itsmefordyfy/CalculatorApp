export const removeTrailZeros = (oldValue: string, newValue: string) => {
  return oldValue.replace(/^0+/, '').concat(newValue);
};
