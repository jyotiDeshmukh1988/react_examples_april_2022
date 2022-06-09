export const add = (a, b) => {
  return a + b;
};
export const isEven = (num) => {
  return num % 2 === 0;
};
export const addDataToArr = (num) => {
  const arr = [10, 20];
  arr.push(num);
  return arr;
};
export const carList = ["tata", "honda", "maruti"];
export const addCar = (car) => {
  carList.push(car);
};


