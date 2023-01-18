export const formatter = (value: number | undefined) => {
  return value != null ? Math.round(value * 100) / 100 : null;
};
