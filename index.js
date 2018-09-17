const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const revisedDriver = Object.assign({}, driver, { [key]: value });

  return revisedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const revisedDriver = Object.assign({}, driver);

  delete revisedDriver[key];
  return revisedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
