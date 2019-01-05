// Code your solution in this file!
const hq = 42;
const distanceFromHqInBlocks = (distance) => {
    return Math.abs(distance - hq);
}

const distanceFromHqInFeet = (distance) => {
    return Math.abs(distance - hq) * 264;
}

const distanceTravelledInFeet = (distance1, distance2) => {
    return Math.abs(distance1 - distance2) * 264;
}

const calculatesFarePrice = (distance1, distance2) => {
    const distance = distanceTravelledInFeet(distance1, distance2);
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance-400)* .02;
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    } else {
        return'cannot travel that far';
    }
}
