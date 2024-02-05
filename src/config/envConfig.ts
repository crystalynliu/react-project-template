import { isNumeric } from '../utils';

export type EnvConfig = {
  example: string;
};

const getStringEnv = (name: string) => {
  const envName = `REACT_APP_${name.toUpperCase()}`;
  const value = process.env[envName];
  if (value) {
    return value;
  } else {
    throw new Error(`${envName} is missing`);
  }
};

const _getNumberEnv = (name: string) => {
  const envName = `REACT_APP_${name.toUpperCase()}`;
  const value = process.env[envName];
  if (isNumeric(value)) {
    return Number(value);
  } else {
    throw new Error(`${envName} is missing or invalid for numeric`);
  }
};

export const envConfig = {
  example: getStringEnv('example')
};
