(() => {
  window.onload = function() {
    setTimeout(function() {
      let preloader = document.querySelector(".bubblewrapper");
      preloader.classList.add("hide");

      let temperature = document.querySelector(".temperature"),
        celsjus = document.querySelector(".celsius"),
        temperatureSection = document.querySelector(".temperaturecelsjus"),
        newTemperature = document.getElementById("newTemperature"),
        teperaturecontainer = document.querySelector(".teperaturecontainer"),
        newTempContainer = document.querySelector(".newTempContainer");

      const checkbox = document.getElementById("tinySwitch");
      checkbox.addEventListener("change", functionname, false);

      function functionname() {
        var isChecked = checkbox.checked;
        if (isChecked) {
          //checked
          document.querySelector(".temperaturecelsjus").style.display =
            "inherit";
          celsjus.style.display = "none";
          const farenheit = temperature.innerHTML;
          const farenheittonumber = Number(farenheit);
          const farenheittonumbernew = Math.round(
            (farenheittonumber * 9) / 5 + 32
          );
          temperature.style.fontSize = "0";
          temperatureSection.innerHTML = ` <span id = "newTemperature"> ${farenheittonumbernew}   ${String.fromCharCode(
            176
          )}  F </span>`;
          console.log(farenheittonumber);
        } else {
          //unchecked
          celsjus.style.display = "inherit";
          temperature.style.fontSize = "20px";
          document.querySelector(".temperaturecelsjus").style.display = "none";
          newTemperature.style.display = "none";
        }
      }
    }, 9000);
  };
})();
