$(document).ready(function () {
  $("#myModal").modal('show');
});

$("#myModal").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open")
});

(function ($) {
  "use strict"; // Start of use strict


  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(document).on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $('div[class="project-hover"]').click(function (e) {
    // <--- don't miss this e
    if ($(this).css("opacity") == 0) e.preventDefault();

  });

  const text = document.querySelector("#name");
  console.log(text);
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

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').on("shown.bs.tooltip", function () {
      $(".tooltip").addClass("animated swing");
    });
  });
})(jQuery);