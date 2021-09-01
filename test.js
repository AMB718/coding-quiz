var myCar = {
  brand: "toyota",
  model: "tacoma",
  color: "white",
};

var startTime = 10;



// var brandPTag = document.createElement('p');
// brandPTag.innerText = myCar.brand;

// document.getElementById("all-cars").append(brandPTag)
var h1Test = document.getElementById("h1-test");

var myCars = [
  {
    brand: "toyota",
    model: "camry",
    color: "white",
  },
  {
    brand: "toyota",
    model: "tacoma",
    color: "white",
  },
];

for (let i = 0; i < myCars.length; i++) {
  var brandPTag = document.createElement("button");
  brandPTag.classList.add("car-brand");
  var modelPTag = document.createElement("button");
  modelPTag.classList.add("car-model");
  brandPTag.innerText = myCars[i].brand;
  modelPTag.innerText = myCars[i].model;
  document.getElementById("all-cars").append(brandPTag);
  document.getElementById("all-cars").append(modelPTag);
}

var allBrands = document.getElementsByClassName("car-brand");
console.log(allBrands);

var allModels = document.getElementsByClassName("car-model");
console.log(allModels);

for (let i = 0; i < allBrands.length; i++) {
  allBrands[i].addEventListener("click", function () {
    h1Test.innerHTML = "I clicked on brand";
    startTime = startTime + 15;
  });
  allModels[i].addEventListener("click", function () {
    h1Test.innerHTML = "I clicked on model";
  });
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {
startTime = startTime - 1;
  document.getElementById("demo").innerHTML = startTime;
  if (startTime === 0) {
      myStopFunction()
  }
}

function myStopFunction() {
  clearInterval(myVar);
}
