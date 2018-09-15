// Write your solution in this file!
var driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj, {[key]: value});
  return newObj;
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  return Object.assign(obj, {[key]: value});
};

function deleteFromDriverByKey(driver, key){
  let newObj = Object.assign({}, driver);
  return delete newObj[key];
};

function destructivelyDeleteFromDriverByKey(driver, key){
  return delete driver[key];
};
