// console.log("hi there");
// $(function() {
//   while( $('.current').height() > $('.current').height() ) {
//       $('#fitin div').css('font-size', (parseInt($('#fitin div').css('font-size')) - 1) + "px" );
//   }
// });

// var starsNumber = 2000;
// //number of stars

// var c = document.getElementById('c');
// var ctx = c.getContext('2d');

// var w = window.innerWidth;
// var h = window.innerHeight * 2;
// var x = 100; var y = 400;

// //where the stars are stored
// var stars = [];
// for (i = 0; i < starsNumber; i++) {
//   //making 100 stars
//   stars.push(new star);
// };

// function star() {
//   //the obj star function
//   this.x = Math.random() * w;
//   this.y = Math.random() * h;
//   //random position

//   this.vx = 1;
//   //starting velocity

//   this.r = Math.random() * 3.5 + 2;
//   //random size
// }

// //the reset
// function draw() {
//   c.width = w;
//   c.height = h;
//   //canvas width & height

//   for (t = 0; t < stars.length; t++) {
//     var s = stars[t];

//     //building the stars
//     ctx.beginPath();
//     ctx.fillStyle = 'white';
//     ctx.arc(s.y, s.x, s.r, Math.PI * 2, true);
//     ctx.fill();

//     //animating the stars
//     s.x -= s.vx;

//     //keeping the stars on the canvas
//     if (s.x < -s.r) {
//       s.x = w + s.r;
//     };
//     if (s.r < 5) {
//       s.vx = 2;
//     };
//     if (s.r < 4) {
//       s.vx = 1;
//     };
//     if (s.r < 3) {
//       s.vx = 0.5;
//     };
//   }
// }

// setInterval(draw, 0.5);