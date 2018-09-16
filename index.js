// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {...driver}
  newObj[key] = value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  const t_obj = Object.assign({}, driver)
  delete t_obj[key]
  return t_obj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}