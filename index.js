$(document).ready(function () {
  "use strict"

  const text = document.querySelector("#name");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  var style = "<div style='display:inline-block';>";
  var style_end = "</div>";
  var content = "";
  let flag = null;

  for (let i = 0; i < splitText.length; i++) {
    let char = 0;

    if (splitText[i] === " ") {
      char = "&nbsp;";
    } else {
      char = splitText[i];
    }
    if (flag || i == 0) {
      content += style + "<span>" + char + "</span>";
      flag = false;
    } else if (char == "&nbsp;") {
      content += "<span>" + char + "</span>" + style_end;
      flag = true;
    } else {
      content += "<span>" + char + "</span>";
    }
  }
  text.innerHTML = content;

  let char = 0;
  let timer = setInterval(onTick, 80);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
});