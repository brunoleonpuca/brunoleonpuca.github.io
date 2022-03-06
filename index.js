$(document).ready(function () {
  "use strict"

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  })

  //Show tooltip on page load
  $('#logo-collapsed').tooltip('show');
  //Hide tooltip after three seconds
  setTimeout(function () {
    $('[data-toggle="tooltip"]').tooltip('dispose')
  }, 3000)


  $(document).on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // $("#myModal").modal('show');

  $("#myModal").on("show", function () {
    $("body").addClass("modal-open");
  }).on("hidden", function () {
    $("body").removeClass("modal-open")
  });

  $('div[class="project-hover"]').click(function (e) {
    // <--- don't miss this e
    if ($(this).css("opacity") == 0) e.preventDefault();

  });

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