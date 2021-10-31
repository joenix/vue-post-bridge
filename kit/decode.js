import { foreach } from "../kit";

export default actions => {
  // Parse
  actions = JSON.parse(actions);

  // Loop
  foreach(actions, (action, key) => {
    try {
      actions[key] = eval("(" + action + ")");
    } catch (e) {
      console.error(e);
    }
  });

  // Return
  return actions;
};
