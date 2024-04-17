
let index = 0;
let active = 0;

//gotop
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#gotop').fadeIn();
    } else {
      $('#gotop').fadeOut();
    }
  })
  $("#gotop").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500)
  });
});

// ...........submenu...........
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// content

const tabs = document.querySelectorAll.bind(document)(".tab-item");
const panes = document.querySelectorAll.bind(document)(".tab-pane");

const tabActive = document.querySelector.bind(document)(".tab-item.active");
const line = document.querySelector.bind(document)(".tabs .line");


requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    document.querySelector.bind(document)(".tab-item.active").classList.remove("active");
    document.querySelector.bind(document)(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// slider1
//1
document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll.bind(document)('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll.bind(document)('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}
//2
document.getElementById('next1').onclick = function () {
  let lists = document.querySelectorAll.bind(document)('.item1');
  document.getElementById('slide1').appendChild(lists[0]);
}
document.getElementById('prev1').onclick = function () {
  let lists = document.querySelectorAll.bind(document)('.item1');
  document.getElementById('slide1').prepend(lists[lists.length - 1]);
}

//content slide
const titles = document.querySelectorAll.bind(document)(".tab-title");
const container = document.querySelectorAll.bind(document)(".container-content")

const tabtitle = document.querySelectorAll.bind(document)(".tab-title.active")
const lines = document.querySelector.bind(document)(".title .line")

requestIdleCallback(function () {
  lines.style.left = tabtitle.offsetLeft + "px";
  lines.style.width = tabtitle.offsetWidth + "px";
});

titles.forEach((tabtt, indexx) => {
  const containerall = container[indexx];

  tabtt.onclick = function () {
    document.querySelector.bind(document)(".tab-title.active").classList.remove("active");
    document.querySelector.bind(document)(".container-content.active").classList.remove("active");

    lines.style.left = this.offsetLeft + "px";
    lines.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    containerall.classList.add("active");
  };
});

// slider 2..............


document.getElementById('next2').onclick = function () {
  let listitem = document.querySelectorAll.bind(document)('.list-item');
  document.getElementById('slide-list').appendChild(listitem[0]);
}
document.getElementById('prev2').onclick = function () {
  let listitem = document.querySelectorAll.bind(document)('.list-item');
  document.getElementById('slide-list').prepend(listitem[listitem.length - 1]);
}




// const rightbtn = document.querySelector.bind(document)('.fa-chevron-right');
// const leftbtn = $('.fa-chevron-left');
// rightbtn.addEventListener("click", function () {
//   index = index + 1;
//   document.querySelector(".content-slider-bottom").style.right = index * 100 + "%";
// })


// leftbtn.addEventListener("click", function () {
//   document.querySelector(".content-slider-bottom").style.left = "200%"
// })

