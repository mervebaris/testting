import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";


describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("her testen önce çalışacağım");
    render (<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("ilk başta bir kere çalışacağım");
  });

  afterEach(() => {
    console.log("her testen sonra çalışacağım");
  });

  afterAll(() => {
    console.log("en son bir kere çalışacağım");
  });

  it("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  it("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
