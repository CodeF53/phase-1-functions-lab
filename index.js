// Code your solution in this file!
/*
  index.js
    distanceFromHqInBlocks()
      1) returns a distance in blocks
      2) returns a distance in blocks
      3) calculates distances below 42nd street
    distanceFromHqInFeet()
      4) returns a distance in feet
      5) returns a distance in feet
      6) calculates distances below 42nd street
    distanceTravelledInFeet()
      7) returns the distance travelled in feet
      8) returns a distance in feet
      9) returns distance when destination is below distance
    calculatesFarePrice(start, destination)
      10) gives customers a free sample
      11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
      12) charges 25 dollars for a distance over 2000 feet
      13) does not allow rides over 2500 feet

*/
function distanceFromHqInBlocks(someValue) {
   return Math.abs(someValue-42);
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start) *264
}

/*
calculatesFarePrice: 
Given the same starting and ending block as the previous test (hint hint),return the fare for the customer. 
 The first four hundred feet are free. 
 For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
 Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
 Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
*/
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let dist = distanceTravelledInFeet(start,destination);
    if (dist<400) {
        return 0;
    } else if (dist <=2000) {
        return 0.02*(dist-400);
    } else if (dist<=2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}