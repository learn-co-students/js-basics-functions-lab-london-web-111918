// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  if (pickup <= 42) {
    blocks = 42 - pickup
  } else {
    blocks = pickup - 42
  }
  return blocks
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(start_block, end_block) {
  if (start_block <= end_block) {
    distance = end_block - start_block
  } else {
    distance = start_block - end_block
  }
  return distance * 264
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    fare = 0
  } else if (distance < 2000){
    fare = (distance - 400) * 0.02
  } else if (distance < 2500) {
    fare = 25
  } else {
    fare = "cannot travel that far"
  }
  return fare
}
