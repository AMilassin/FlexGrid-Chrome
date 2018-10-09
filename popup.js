//
// Copyright (c) 2018 Andras Milassin. All rights reserved.
//

(() => {
  console.log("bingo");

  const injectScript = () => {};

  // initialize the popup
  const init = () => {
    console.log("init");

    const gridTypeToggle = document.getElementById("grid_type_toggle");
    console.log("heya", gridTypeToggle);
  };

  // Return the publicly accessible methods
  return {
    init
  };
})();
