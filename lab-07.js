class CustomError extends Error {
  constructor(error) {
    super(error);
    name = "Custom Error";
  }
}

function throwGenericError() {
  throw new Error("Generic error");
}

function throwCustomError() {
  throw new CustomeError("Custom error");
}

console.log("Force generic error");
try {
  console.log("Generic error try block");
  throwGenericError("Error: Generic Error");
} catch (error) {
  console.log("Generic error catch block");
  console.log(`${error.name}: ${error.mesage}`);
} finally {
  console.log("Generic error finally block");
}

console.log("Force custom error");
try {
  console.log("Custom error try block");
  throwCustomError("Error: Custom Error");
} catch (error) {
  console.log("Custom error catch block");
  console.log(`${error.name}: ${error.mesage}`);
} finally {
  console.log("Custom error finally block");
}
