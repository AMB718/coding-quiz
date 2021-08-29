const timer = document.getElementsByClassName("timer");

const btnStart = document.getElementsByClassName("btn-start");

btnStart.addEventListener("click", function () {
  setInterval(function (){
   console.log("Hi")
  }, 1000);
});

