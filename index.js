// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42;
  return block > hq ? block - hq : hq - block;
}

function distanceFromHqInFeet(block) {
  let blocks = distanceFromHqInBlocks(block);
  return blocks * 264;
}

function distanceTravelledInFeet(from, to) {
  let blockDistance = to > from ? to - from : from - to;
  return blockDistance * 264;
}

function calculatesFarePrice(from, to) {
  let distanceFeet = distanceTravelledInFeet(from, to);
  switch (true) {
    case distanceFeet > 2500:
      return 'cannot travel that far';
    case distanceFeet > 2000:
      return 25;
    case distanceFeet < 400:
      return 0;
    case distanceFeet < 2000:
      return (distanceFeet - 400) * 0.02;
  }
}
