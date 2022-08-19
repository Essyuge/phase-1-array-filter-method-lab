// Code your solution here
function findMatching(drivers, name) {
  const foundDrivers = drivers.filter((driver) => {
    return driver.toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  return foundDrivers;
}

function fuzzyMatch(drivers, name) {
  const foundDrivers = drivers.filter((driver) => {
    return driver.slice(0, 2).toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  return foundDrivers;
}

function matchName(drivers, name) {
  const foundDrivers = drivers.filter((driver) => {
    return driver["name"].toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  return foundDrivers;
}
