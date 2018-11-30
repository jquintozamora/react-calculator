import { calculateState, makeOperation } from "..";

describe("Calculator Helper Tests", () => {
  describe("makeOperation", () => {
    it("should do + operation", () => {
      expect(makeOperation(0, 2, "+")).toBe(2);
    });
    it("should do - operation", () => {
      expect(makeOperation(44, 2, "-")).toBe(42);
    });
    it("should do ÷ operation", () => {
      expect(makeOperation(44, 2, "÷")).toBe(22);
    });
    it("should do * operation", () => {
      expect(makeOperation(44, 2, "x")).toBe(88);
    });
    it("should return null if no valid operation", () => {
      expect(makeOperation(44, 2, "*")).toBe(null);
    });
  });

  describe("calculateState", () => {
    const initialState = {
      total: null,
      nextNumber: null,
      operator: null
    };
    it("should fill total as first operand", () => {
      expect(calculateState(initialState, "2")).toEqual({
        total: "2",
        nextNumber: null,
        operator: null
      });
    });
    it("should not fill operator if there is no total assigned", () => {
      expect(
        calculateState(
          {
            total: null,
            nextNumber: null,
            operator: null
          },
          "+"
        )
      ).toEqual({
        total: null,
        nextNumber: null,
        operator: null
      });
    });
    it("should fill operator if there is no operator and there is total", () => {
      expect(
        calculateState(
          {
            total: "34",
            nextNumber: null,
            operator: null
          },
          "+"
        )
      ).toEqual({
        total: "34",
        nextNumber: null,
        operator: "+"
      });
    });
    it("should replace operator if there is operator", () => {
      expect(
        calculateState(
          {
            total: "34",
            nextNumber: null,
            operator: "+"
          },
          "-"
        )
      ).toEqual({
        total: "34",
        nextNumber: null,
        operator: "-"
      });
    });
    it("should fill next number if there is total and operator", () => {
      expect(
        calculateState(
          {
            total: "34",
            nextNumber: "3",
            operator: "+"
          },
          "5"
        )
      ).toEqual({
        total: "34",
        nextNumber: "35",
        operator: "+"
      });
    });
    it("should calculate total and clear operator and nextNumber if = has been clicked", () => {
      expect(
        calculateState(
          {
            total: "34",
            nextNumber: "3",
            operator: "+"
          },
          "="
        )
      ).toEqual({
        total: "37",
        nextNumber: null,
        operator: null
      });
    });
    it("should clear everything if AC clicked", () => {
      expect(
        calculateState(
          {
            total: "34",
            nextNumber: "3",
            operator: "+"
          },
          "AC"
        )
      ).toEqual({
        total: null,
        nextNumber: null,
        operator: null
      });
    });
    it("should fill .", () => {
      expect(
        calculateState(
          {
            total: "34",
            nextNumber: "3",
            operator: "+"
          },
          "."
        )
      ).toEqual({
        total: "34",
        nextNumber: "3.",
        operator: "+"
      });
    });
    it("should change sign if =/- clicked", () => {
      expect(
        calculateState(
          {
            total: "34",
            nextNumber: "3",
            operator: "+"
          },
          "+/-"
        )
      ).toEqual({
        total: "34",
        nextNumber: "-3",
        operator: "+"
      });
    });
  });
});
