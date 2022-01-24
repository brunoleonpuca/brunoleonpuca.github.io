
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $(document).on("click", function() {
        $(".navbar-collapse").collapse("hide");
    }); 

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $('div[class="portfolio-hover"]').click(function(e){ // <--- don't miss this e
    if ($(this).css('opacity')==0) e.preventDefault();
    });
    
    var scrollAmount = 600;
    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollAmount) {
            $('.social-icons').stop().animate({opacity: '0'}, 50);
            $('.social-icons-floating').stop().animate({opacity: '1'}, 50);
        } else {
            $('.social-icons-floating').stop().animate({opacity: '0'}, 50);
            $('.social-icons').stop().animate({opacity: '1'}, 50);
        }
    })

    const text = document.querySelector('.about-header');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";
    
    var style = "<div style='display:inline-block';>";
    var style_end = "</div>";
    var content = "";
    let flag = null;

    for (let i = 0; i < splitText.length; i++)
    {
        let char = 0;
        
        if (splitText[i] === " ") {
            char = "&nbsp;"sfekuoyesa9d8fi6saetdr46
        } else {
            char = splitText[i];
        }
        if ((flag) || (i==0)) {
            content += style + "<span>" + char + "</span>";
            flag = false
        }
        else if (char == "&nbsp;") {
            content += "<span>" + char + "</span>" + style_end;
            flag = true;
        }
        else {
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
        $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function () {
            $('.tooltip').addClass('animated swing');
        })
    })
    
})(jQuery); // End of use strict



