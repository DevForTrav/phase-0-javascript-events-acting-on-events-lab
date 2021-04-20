const dodger = document.getElementById("dodger"); 

dodger.style.backgroundColor = "#FF69B4"; 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
} 



function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left >= 0 && left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });


// PERSONAL SOLUTION
// dodger.style.backgroundColor = "#FF69B4"; 
// dodger.style.bottom = "0"; 
// const movement = event => {
//     let horizonatalMovement = parseInt(dodger.style.left)
//     if (event.key === "ArrowLeft"){
//         dodger.style.left = (horizonatalMovement - 20) + 'px';
//     } else if (event.key === "ArrowRight") {
//         dodger.style.left = (horizonatalMovement + 20) + 'px';
//     }
// }

// document.addEventListener('keydown', movement)