import dotenv from 'dotenv';
import _ from 'lodash';

// call dotenv and it will return an Object with a parsed key
const result = dotenv.config();
let envs;

if (!('error' in result)) {
  envs = result.parsed;
  const envKeys = Object.keys(envs).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envs[next]);
    return prev;
  }, {});
  envs = envKeys;
} else {
  envs = {};
  _.each(process.env, (value, key) => (envs[key] = value));
}

module.exports = envs;
