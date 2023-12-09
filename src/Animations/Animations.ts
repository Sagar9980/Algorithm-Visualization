export const animatePointers = (pointer: string, pos: number) => {
  const p: any = document.getElementById(pointer);
  p.style.display = "inline-block";
  p.style.transform = `translateX(${pos * 40}px)`;
};

export const animateResultElement = (i: number) => {
  const arrayElement: any = document.getElementById(`a-box-${i}`);
  arrayElement.className = "a-box standout";
};

export const animateSwap = (i: number, j: number) => {
  const arrayElementI: any = document.getElementById(`a-box-${i}`);
  const arrayElementJ: any = document.getElementById(`a-box-${j}`);

  const animationF = document.createElement("style");
  animationF.innerHTML = `
  @keyframes forwardSwap {
    0% {
        transform: translate(0px, 0px);
    }
    33% {
        transform: translate(0px, -60px);
    }
    66% {
        transform: translate(40px, -60px);
    }
    100% {
        transform: translate(40px, 0px);
    }
}
  `;
  const animationB = document.createElement("style");
  animationB.innerHTML = `
  @keyframes backwardSwap {
    0% {
        transform: translate(0px, 0px);
    }
    33% {
        transform: translate(0px, -60px);
    }
    66% {
        transform: translate(-40px, -60px);
    }
    100% {
        transform: translate(-40px, 0px);
    }
}
  `;
  document.head.appendChild(animationF);
  arrayElementI.style.animation = "forwardSwap 1000ms forwards 0ms ease-in";
  document.head.appendChild(animationB);
  arrayElementJ.style.animation = "backwardSwap 1000ms forwards 0ms ease-in";
};

// export const animateSwap = (i: number, j: number) => {
//   const arrayElementI: any = document.getElementById(`a-box-${i}`);
//   const arrayElementJ: any = document.getElementById(`a-box-${j}`);

//   const animationF = document.createElement("style");
//   animationF.innerHTML = `
//     @keyframes forwardSwap {
//       0% {
//         transform: translate(0px, 0px);
//       }
//       33% {
//         transform: translate(0px, -60px);
//       }
//       66% {
//         transform: translate(40px, -60px);
//       }
//       100% {
//         transform: translate(40px, 0px);
//       }
//     }
//   `;

//   const animationB = document.createElement("style");
//   animationB.innerHTML = `
//     @keyframes backwardSwap {
//       0% {
//         transform: translate(0px, 0px);
//       }
//       33% {
//         transform: translate(0px, -60px);
//       }
//       66% {
//         transform: translate(-40px, -60px);
//       }
//       100% {
//         transform: translate(-40px, 0px);
//       }
//     }
//   `;

//   // Add event listeners to remove the animation classes after the animation completes
//   arrayElementI.addEventListener("animationend", onAnimationEnd);
//   arrayElementJ.addEventListener("animationend", onAnimationEnd);

//   // Append the styles to the head
//   document.head.appendChild(animationF);
//   document.head.appendChild(animationB);

//   // Apply the animations to the elements
//   arrayElementI.style.animation = "forwardSwap 1000ms forwards 0ms ease-in";
//   arrayElementJ.style.animation = "backwardSwap 1000ms forwards 0ms ease-in";

//   function onAnimationEnd() {
//     // Remove event listeners
//     arrayElementI.removeEventListener("animationend", onAnimationEnd);
//     arrayElementJ.removeEventListener("animationend", onAnimationEnd);

//     // Remove animation classes
//     arrayElementI.style.animation = "";
//     arrayElementJ.style.animation = "";

//     // Remove style elements from the head
//     document.head.removeChild(animationF);
//     document.head.removeChild(animationB);
//   }
// };
