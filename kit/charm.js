import { name, load } from "../kit";

export default (action, param) => {
  // Load Actions
  let $bridge = (window.opener || top).$bridge; //  Object.assign(load(name), top.$bridge);

  // No Action
  if (!$bridge[action]) {
    return console.error(`${action} is not defined .`);
  }

  // Executer
  $bridge[action](param);
};
