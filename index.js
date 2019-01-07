function distanceFromHqInBlocks(someValue) {
  distance = someValue - 42
  if (distance < 0) {
  distance = 0 - distance;
}
  return distance
}

function distanceFromHqInFeet(someValue) {
  distance = distanceFromHqInBlocks(someValue) * 264
  return distance
}

function distanceTravelledInFeet(arg1, arg2) {
  distance = distanceFromHqInFeet(arg1) - distanceFromHqInFeet(arg2)
  if (distance < 0) {
    distance = 0 - distance;
  }
  return distance
}

function calculatesFarePrice(start, destination) {
  let price
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    price = 0
  }
  else if (distance < 2000) {
    price = (distance - 400) * .02;
  }
  else if (distance > 2500) {
    price = "cannot travel that far";
  }
  else {
    price = 25;
  }
  return price
}
