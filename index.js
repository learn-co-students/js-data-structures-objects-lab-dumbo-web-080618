// Write your solution in this file!
 const driver = {};

//should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.
 function updateDriverWithKeyAndValue(driver, key, value) {
   let newDriver = Object.assign({}, driver, {[key]: value});
   return newDriver
 }

 //should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

//this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
//deletes `key` from a clone of driver and returns the new driver (it is non-destructive) ‣
// does not modify the original driver (it is non-destructive)
function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver); //assigned and empty obj and driver
  return delete newDriver[key] //returned a delete of newdriver with its key passed in such that its value is erased
}

//returns driver without the delete key/value pair
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver  //modifies the original driver
}
