let isClicked = false;
let length = document.getElementsByClassName("rating-btn").length;
let key;

// Adding Event Listener to Radio buttons if they change i.e. gets selected

for (let i = 0; i < length; i++) {
  document
    .querySelectorAll(".rating-btn")
    [i].addEventListener("change", function () {
      key = this.getAttribute("id");
      isClicked = true;
    });
}

// Checking for click on submit button

document.querySelector(".submit-btn").addEventListener("click", function () {
  if (isClicked) {
    // adding hidden class to rating section
    document.querySelector(".rating-section").classList.add("hidden");
    // removing hidden class from Thank You section
    document.querySelector(".thankyou-section").classList.remove("hidden");
    // Changing text value of span to the key
    document.getElementById("rating-value").innerText = key;
  } else {
    alert("Please Select a rating first!!");
  }
});
