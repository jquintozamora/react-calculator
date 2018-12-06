# React Simple Calculator
![react-calculator](/assets/react-calculator.png)

## Stack
A BFF layer can be done in hundred different ways, in our case we chose:
- `react 16.7.6`
- `typescript` as type checker and transpiler
- `styled components` as a CSS
- `tslint` as a linter tool
- `jest` as a testing framework
- `webpack` as bundler


## Requirements
- NodeJS **version 8.11.3**
- NPM **version 6**


## Local Environment setup

1. Install dependencies
    ```
    npm install
    ```

2. Run in development mode
    ```
    npm run dev
    ```

3. Build
    ```
    npm run build
    ```

## Running Linter
- Linter runs automatically when we do `git commit`
- To run linter manually -> `npm run lint`


## Running Unit Tests
- Unit Tests runs automatically when we do `git push`
- To run tests manually -> `npm run test` 
- Run tests in watch mode -> `npm run test -- --watchAll <nameOfTheFile>`
