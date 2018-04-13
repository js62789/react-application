import renderClient from './renderClient';

renderClient(
  require(process.env.ROOT_COMPONENT_PATH).default,
  process.env.ROOT_ID,
  require(process.env.REDUCERS_PATH).default
);
