/*document.addEventListener("DOMContentLoaded", function () {
    let slider = this.getElementById("brightness");
    slider.addEventListener("input", adjustSlider);
    adjustSlider(slider);
});
function adjustSlider(e) {
    let body = document.body,
        switchLightMin = 40,
        switchLightMax = 100,
        tar = e.target || e,
        pct = +tar.value / +tar.max,
        L1 = pct * (switchLightMin - switchLightMin) + switchLightMin,
        L2 = L1 - 10,
        L3 = L1 - 37,
        L = [L1, L2, L3],
        thumbHueMin = 0,
        thumbHueMax = 120,
        thumbHue = pct * (thumbHueMax - thumbHueMin) + thumbHueMin,
        thumbSat = 90.4;
        //update the thomb icon hue
        body.style.setProperty( --p , hsl($(thumbHSL)));
    body.style.setProperty(--pT , hsla($(thumbHSL), 0));

}*/
document.addEventListener("DOMContentLoaded", function () {
  let slider = this.getElementById("brightness");
  slider.addEventListener("input", adjustSlider);
  adjustSlider(slider);
});

function adjustSlider(e) {
  let body = document.body,
    switchLightMin = 40,
    switchLightMax = 100,
    tar = e.target || e,
    pct = +tar.value / +tar.max,
    L1 = pct * (switchLightMax - switchLightMin) + switchLightMin,
    L4=137-L1,
    thumbHueMin = 0,
    thumbHueMax = 120,
    thumbHue1 = pct * (thumbHueMax - thumbHueMin) + thumbHueMin,
    thumbSat =0;
      //thumbHSL = (thumbHue,thumbSat,L)

  if (L1 < 100) {
    if (L1 < 90) {
      if (L1 < 63) {
        L = 0;
      //  L4 = 100;
        thumbSat = 90.4;
        thumbHue=120;
      } else {
        L = 63;
       // L4 = 90;
        thumbSat = 9.8;
        thumbHue=228;
      }
    } else {
      L = 90;
     // L4 = 63;
      thumbSat = 9.8;
      thumbHue=228;
      thumbHue1=228;
    }
  } else {
    L = 100;
    //L4 = 44.9;
    thumbSat = 9.8;
    thumbSat1 = 90.4;
    thumbHue=228;
    thumbHue1=120;
  }
  /*body {
            --l1:hsl(228,9.8%,100%); 
            --l2:hsl(228,9.8%,90%);
            --l3:hsl(228,9.8%,63%);
            --p:hsl(120,90.4%,44.9%);
            --pT:hsla(120,90.4%,44.9%,0);
            background-color: var(--l2);
            height: 100vh;
        }*/
  thumbHSL = `${thumbHue1}, ${thumbSat1}%, ${L4}%`;
  thumbHSL1 = `${thumbHue}, ${thumbSat}%, ${L}%`;


  body.style.setProperty("--p", `hsl(${thumbHSL})`);
  body.style.setProperty("--l2", `hsl(${thumbHSL1})`);
  body.style.setProperty("--pT", `hsla(${thumbHSL}, 0)`);
}

