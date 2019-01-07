function distanceFromHqInBlocks(location) {
  return Math.abs(42 - location)
}

function distanceTravelledInFeet(begblock, endblock) {
  return Math.abs((endblock - begblock)) * 264
}

function distanceFromHqInFeet(location) {
  return distanceTravelledInFeet(42, location)
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (0.02 * (distance - 400)) ;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  }  else {
    return 'cannot travel that far';
  }
}
