const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) count--;
    else if(styles.contains('increase')) count++;
    else count = 0;
    
    if(count > 0 ) {
      value.classList.remove("text-danger");
      value.classList.add("text-success");
    }
    else if(count < 0) {
      value.classList.remove("text-success");
      value.classList.add("text-danger");
    }
    else {
      value.classList.remove("text-success");
      value.classList.remove("text-danger");
    }
    value.innerHTML = count;
  })
});