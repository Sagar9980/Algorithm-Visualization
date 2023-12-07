export const animatePointers = (pointer: string, pos: number) => {
  const p: any = document.getElementById(pointer);
  p.style.display = "inline-block";
  p.style.transform = `translateX(${pos * 40}px)`;
};

export const animateResultElement = (i: number) => {
  const arrayElement: any = document.getElementById(`a-box-${i}`);
  arrayElement.className = "a-box standout";
};
