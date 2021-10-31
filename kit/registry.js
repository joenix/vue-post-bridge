import { save, load } from "../kit";

export default actions => {
  // Load Actions
  let $bridge = Object.assign({}, actions);

  // Save Actions
  top.$bridge = $bridge; // save($bridge);
};
