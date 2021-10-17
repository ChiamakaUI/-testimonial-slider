let container = document.querySelectorAll(".container");
let prev = document.getElementById("prev_btn");
let next = document.getElementById("next_btn");
let imageLength = container.length
let index = 0;


prev.addEventListener("click", function () {
    showSlides('prev')
});

next.addEventListener("click", function () {
    showSlides('next')
});


function showSlides(direction) {
    
    console.log(direction)

  if (direction == 'next') {
      index++
    //   console.log(index)
      if (index == imageLength) {
         index = 0
      }
    }
    
    if (direction == 'prev') {
        index--
        // console.log(index);
         if (index  < 0) {
           index = 0;
         }
    }

    for (let i = 0; i < container.length; i++) {
      container[i].classList.remove("showing");
    }

    container[index].classList.add('showing')
}