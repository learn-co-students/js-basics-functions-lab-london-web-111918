// Code your solution in this file!

function distanceFromHqInBlocks(customerBlockNum) {
  const HqBlockNum = 42;
    if (customerBlockNum < HqBlockNum) {
      return HqBlockNum - customerBlockNum;
    } else if (customerBlockNum > HqBlockNum) {
      return customerBlockNum - HqBlockNum
    }
}

function distanceFromHqInFeet(customerBlockNum) {
  return distanceFromHqInBlocks(customerBlockNum) * 264
}

function distanceTravelledInFeet(customerBlockNum, destinationBlockNum) {
    const blockLength = 264

    if (customerBlockNum < destinationBlockNum) {
      return (destinationBlockNum - customerBlockNum) * blockLength;
    } else if (customerBlockNum > destinationBlockNum) {
      return (customerBlockNum - destinationBlockNum) * blockLength
    }
}

function calculatesFarePrice(start, destination) {
  let totalFeet = distanceTravelledInFeet(start, destination)
  let totalDollars = (totalFeet - 400) * 2 / 100

  if (totalFeet <= 400) {
    return 0;
  } else if (totalFeet > 400 && totalFeet <= 2000) {
    return totalDollars;
  } else if (totalFeet > 2000 && totalFeet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
