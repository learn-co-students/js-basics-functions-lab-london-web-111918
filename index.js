// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42;
  }
  else if (location < 42) {
    return 42 - location;
  }
}

function distanceFromHqInFeet(location) {
  if (location > 42) {
    return (location - 42) * 264;
  }
  else if (location < 42) {
    return (42 - location) * 264;
  }
}

function distanceTravelledInFeet(beginning, end) {
  let distanceTravelled = end > beginning ? end - beginning : beginning - end;
  return distanceTravelled * 264;
}

function calculatesFarePrice(beginning, end){
  let distance = distanceTravelledInFeet(beginning, end);
    switch (true) {
      case distance > 2500:
        return "cannot travel that far";
      case distance < 400:
        return 0;
      case distance > 2000:
        return 25;
      case distance < 2000:
        return (distance - 400) *0.02;
      }
    }
