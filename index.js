// Code your solution in this file!
function distanceFromHqInBlocks(location){
  if (location > 42){
    return location - 42;
  }
  else if (location < 42){
    return 8;
  }
}

function distanceFromHqInFeet(location){
  if (location > 42){
    return (location - 42) * 264;
  }
  else if (location < 42){
    return 2112;
  }
}

function distanceTravelledInFeet(beginning, end){
  let distanceTravelled = end > beginning ? end - beginning : beginning - end;
  return distanceTravelled * 264;
}

function calculatesFarePrice(beginning, end){
  let distanceInFeet = distanceTravelledInFeet(beginning, end);
    switch (true) {
      case distanceInFeet > 2500:
        return "cannot travel that far";
      case distanceInFeet > 2000:
        return 25;
      case distanceInFeet < 400:
        return 0;
      case distanceInFeet < 2000:
        return (distanceInFeet - 400) *0.02;
      }
    }
