import { name, encode } from "../kit";

export default actions => {
  // Save
  localStorage.setItem(name, encode(actions));

  // Return
  return actions;
};
