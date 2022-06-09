import { render, screen } from "@testing-library/react";
import App from "./App";

describe("this is test suit in app comp", () => {
  // test-suit

  test("renders learn react link", () => {
    // testcase-1
    render(<App />);
    const linkElement = screen.getByText(/This is my Header/i);
    expect(linkElement).toBeInTheDocument();
    console.log("this is it-1");
  });

  it("this is testcase -2 in app comp", () => {
    console.log("this is it-2");
  });

  // beforeAll(() => {  // 1
  //   console.log("Before All");
  // });
  // afterAll(() => {   // 1
  //   console.log("AFter All");
  // });
  // beforeEach(() => {  // N
  //   console.log("Before Each");
  // });
  // afterEach(() => { //N
  //   console.log("AFter Each");
  // });

});
