// Code your solution in this file!
function distanceFromHqInBlocks(abc) {
    return Math.abs (abc - 42)
    //returns the number of blocks given a value
}

function distanceFromHqInFeet(someValue1){
    return distanceFromHqInBlocks(someValue1)*264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

  }
      
  function distanceTravelledInFeet(start, destination) {
    return 264 * (Math.abs (start - destination))
    //returns the number of feet traveled}
  
  }

  function calculatesFarePrice(start, destination) {
    //inputs are in blocks
    const distInBlocks = Math.abs (destination - start);
    const distInfeet = distInBlocks * 264;
    
    if (distInfeet < 400){
      return 0
    } else {
      if (distInfeet < 2000 && distInfeet >= 400){
        return distInBlocks * .02
      } else{
        if (distInfeet < 2500 && distInfeet >= 2000){
          return 25
        } else {
          return 'cannot travel that far'
        }
      } 
    }

    //returns the fare for the customer
  }