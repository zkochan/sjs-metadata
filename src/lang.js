export const isObject = obj => typeof obj === 'object' ? obj !== null : typeof obj === 'function';
export const isUndefined = obj => obj === undefined;
export const isNull = obj => obj === null;
export const isSymbol = obj => typeof obj === 'symbol';
export const isString = obj => typeof obj === 'string';

export const isPropertyKey = obj => isString(obj) || isSymbol(obj);
