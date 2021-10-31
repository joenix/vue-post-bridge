import { name, decode } from "../kit";

export default () => {
  // Load
  let $bridge = decode(localStorage.getItem(name));

  // Top
  top.$bridge = $bridge;

  // Return
  return $bridge;
};
