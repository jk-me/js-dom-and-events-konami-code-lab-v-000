const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

index = 0

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDownHandler)

  function onKeyDownHandler(e) {
    // alert(`${e.which}`)
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    }
    else {
      index = 0;
    }
  }
}
