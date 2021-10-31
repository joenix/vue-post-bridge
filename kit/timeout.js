function run(callback, time = 15) {
  // Get Out
  let out = setTimeout(
    // Callback
    () => {
      // Stop Timeout
      if (callback() === false) {
        // Clear
        return clearTimeout(out);
      }

      // Run Timeout
      run(callback, time);
    },
    // Intervel
    time
  );
}

export default run;
