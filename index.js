// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42 ) {
    return block - 42;
  }
  else if (block < 42) {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  if ((block1 - block2) > 0) {
    return (block1 - block2) * 264;
    }
    else {
      return (block2 - block1) * 264
    }
}

function calculatesFarePrice(block1, block2){
  let price;
  if (distanceTravelledInFeet(block1, block2) < 400) {
    price = 0
    return price;
  }
  else if (distanceTravelledInFeet(block1, block2) >= 400 && distanceTravelledInFeet(block1, block2) < 2000 ){
    return (distanceTravelledInFeet(block1, block2) - 400) * 0.02;
  }
  else if (distanceTravelledInFeet(block1, block2) >= 2000 && distanceTravelledInFeet(block1, block2) < 2500){
  return 25;
  }
  else {
    return 'cannot travel that far'
  }
}
