// function x() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
//   return function y() {
//     var a = 7;
//     setTimeout(() => {
//       console.log(a);
//     }, 3000);
//     console.log("Namaste JavaScript");
//   };
// }
// x()();

function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    },i * 1000);
  }
  console.log("Hello JavaScript");
}
a();
function agree(){
  console.log("I agree");
}
setTimeout(agree, 3000);