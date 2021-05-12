// Code your solution in this file!

const returnFirstTwoDrivers = function(driversArray) {
  return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray) {
  return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

//WHAT IS THIS
function createFareMultiplier(integer) {
  return function (fare){
    return fare * integer

  }
}
 //THEY DON'T WANT IT THIS WAY
function fareDoubler(fare) {
  return fare * 2
}

//THEY DON'T WANT IT THIS WAY
function fareTripler(fare) {
  return fare * 3
}

function selectDifferentDrivers(driversArray, functionTarget) {
  return functionTarget(driversArray)
}