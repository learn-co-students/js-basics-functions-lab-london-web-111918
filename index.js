// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(beginning, end) {
  return Math.abs((end - beginning) * 264);
}

function calculatesFarePrice(beginning, end) {
  const distance = distanceTravelledInFeet(beginning, end);
  if  (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
