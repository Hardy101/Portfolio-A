let words = [" Web developer", " freelancer", " writer"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};
$(document.body).ready(function () {
  wordflick();
});

// Active Nav Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".i_nav");
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// Portfolio Gallery FIlter
$(document).ready(function () {
  $(".portfolio_section_btn").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".portfolio_section_body .col").show("500");
    } else {
      $(".portfolio_section_body .col")
        .not("." + value)
        .hide("500");
      $(".portfolio_section_body .col")
        .filter("." + value)
        .show("500");
    }
  });
  // Selecting Active Classes
  $(".portfolio_section_btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// Cursor Action
let cursor = $(".cursor"),
  follower = $(".cursor-follower");

let posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document.body).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// $(".card-img-top").on("mouseenter", function () {
//   cursor.addClass("active");
//   follower.addClass("active");
// });

// $(".card-img-top").on("mouseleave", function () {
//   cursor.removeClass("active");
//   follower.removeClass("active");
// });
