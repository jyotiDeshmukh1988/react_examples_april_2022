import {
  add,
  addCar,
  addDataToArr,
  carList,
  isEven,
} from "./demo1";

describe("Testing Demo1 file", () => {
  it("Testing add function", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(2, -3)).toBe(-1);
    expect(add(-2, 3)).toBe(1);
    expect(add(-2, -3)).toBe(-5);
    expect(add(2, 3)).not.toBe(undefined);
    expect(add(2, 3)).not.toBe(NaN);
  });
  it("Testing iseven method", () => {
    expect(isEven(4)).toBeTruthy();
    expect(isEven(6)).toBe(true);
    expect(isEven(5)).toBe(false);
    expect(add(2, 3)).toBeTruthy();
  });

  test.only("testing to Equal", () => {
    expect(addDataToArr(30)).toEqual([10, 20, 30]);
  });
  
  it("testing to Array", () => {
    expect(carList.length).toBe(3);
    expect(carList).toContain("tata");
    expect(carList).not.toContain("BMW");
    addCar("hundai");
    expect(carList.length).toBe(4);
    expect(carList).toContain("hundai");
    expect(carList).not.toContain("BMW");
  });

});
