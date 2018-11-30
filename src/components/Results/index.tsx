import * as React from "react";
import { IResultsProps } from "./IResultsProps";
import { ResultsContainer } from "./styles";

const Results = (props: IResultsProps) => <ResultsContainer>{props.text}</ResultsContainer>;

export default Results;
