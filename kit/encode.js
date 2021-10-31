import { foreach } from "../kit";

export default actions => {
  // Loop
  foreach(actions, (action, key) => {
    if (typeof action === "function") {
      actions[key] = action + "";
    }
  });

  // Return
  return JSON.stringify(actions);
};
