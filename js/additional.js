function isUnderPoint(point, element) {
  const { left, top, height, width } = element.getBoundingClientRect();

  const { x, y } = point;

  return left <= x && x <= left + width && top <= y && y <= top + height;
}


function getRandomBetween(min, max) {
  return  min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomFrom(...args) {
  const index = Math.floor(Math.random() * args.length);
  return args[index];
}


function addEventListener(element, ...args) {
   element.addEventListener(...args);
   return () => element.removeEventListener(...args);
}