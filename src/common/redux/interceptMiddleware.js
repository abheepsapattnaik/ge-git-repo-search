export const intercept = () => next => action => {
  return next(action);
};