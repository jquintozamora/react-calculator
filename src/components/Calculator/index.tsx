import * as React from "react";
import ButtonPanel from "../ButtonPanel";
import Results from "../Results";

import { calculateState } from "../../helpers";
import { ICalculatorState } from "./ICalculatorState";
import { CalculatorContainer } from "./styles";

class Calculator extends React.PureComponent<{}, ICalculatorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      total: null,
      nextNumber: null,
      operator: null
    };
  }

  public render() {
    const { total, nextNumber, operator } = this.state;
    const textToDisplay = nextNumber !== null ? nextNumber : total !== null ? total : "0";
    return (
      <CalculatorContainer>
        <Results text={textToDisplay} />
        <ButtonPanel operator={operator} onButtonClick={this.handleCalculations} />
      </CalculatorContainer>
    );
  }

  private handleCalculations = (name?: string) => {
    if (name) {
      this.setState(calculateState(this.state, name));
    }
  };
}

export default Calculator;
