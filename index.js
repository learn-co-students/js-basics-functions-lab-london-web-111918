// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42
  } else if (location < 42) {
    return 42 - location
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((destination - start) * 264)
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  let price = 0
  if (distance <= 400) {
    price = 0
  } else if (distance > 400 && distance <= 2000) {
    price = (distance - 400) * 0.02
  } else if (distance > 2000 && distance < 2500) {
    price = 25
  } else if (distance > 2500) {
    return 'cannot travel that far'
  }
  return price
}
