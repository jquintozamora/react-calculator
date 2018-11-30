import { ICalculatorState } from "../components/Calculator/ICalculatorState";

export function makeOperation(total: number, nextNumber: number, operator: string) {
  switch (operator) {
    case "+":
      return total + nextNumber;
    case "-":
      return total - nextNumber;
    case "x":
      return total * nextNumber;
    case "÷":
      return total / nextNumber;
    default:
      return null;
  }
}

export function calculateState(state: ICalculatorState, name: string): ICalculatorState {
  const { total, nextNumber, operator } = state;

  if (name === "AC") {
    return { total: null, nextNumber: null, operator: null };
  }

  if (name === "+/-") {
    if (nextNumber !== null) {
      return { ...state, nextNumber: (parseFloat(nextNumber) * -1).toString() };
    }
    if (total !== null) {
      return { ...state, total: (parseFloat(total) * -1).toString() };
    }
  }

  if (name === ".") {
    if (total === null) {
      return { ...state, total: "0." };
    }
    if (total !== null && operator === null) {
      if (total.includes(".") === false) {
        return { ...state, total: total + "." };
      }
    }
    if (total !== null && operator !== null) {
      if (nextNumber === null) {
        return { ...state, nextNumber: "0." };
      } else {
        if (nextNumber.includes(".") === false) {
          return { ...state, nextNumber: nextNumber + "." };
        }
      }
    }
  }

  if (name === "%") {
    if (nextNumber !== null) {
      return { ...state, nextNumber: (parseFloat(nextNumber) / 100).toString() };
    }
    if (total !== null) {
      return { ...state, total: (parseFloat(total) / 100).toString() };
    }
  }

  if (name === "=" && total !== null && operator !== null && nextNumber !== null) {
    const result = makeOperation(parseFloat(total), parseFloat(nextNumber), operator);
    if (result !== null) {
      return { total: result.toString(), nextNumber: null, operator: null };
    }
  }

  const operators = ["+", "-", "x", "÷"];
  const operatorNext = operators.includes(name) && name;
  if (operatorNext) {
    if (total !== null) {
      return { ...state, operator: operatorNext };
    }
  }

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const number = numbers.includes(name) && name;
  if (number !== false) {
    // first time user input a number
    if (total === null) {
      return { ...state, total: number };
    }

    // user continue filling first operator
    if (total !== null && operator === null) {
      const concatTotal = parseFloat(total.toString() + number);
      return { ...state, total: concatTotal.toString() };
    }

    // we already got first operator and operation set up
    if (total !== null && operator !== null) {
      if (nextNumber === null) {
        return { ...state, nextNumber: number };
      } else {
        const concatNextNumber = parseFloat(nextNumber.toString() + number);
        return { ...state, nextNumber: concatNextNumber.toString() };
      }
    }
  }

  return state;
}
