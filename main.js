var pics_src = new Array(
  "https://www.hitode-festival.com/wp-content/uploads/hatena/20150707193020.jpg",
  "https://pbs.twimg.com/media/D5GAe1DUUAABkl6.jpg",
  "https://pbs.twimg.com/media/DFWHTSkVoAAw7aC.jpg"
);
var num = -1;

slideshow_timer();

function slideshow_timer() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
  setTimeout("slideshow_timer()", 5000);
}
