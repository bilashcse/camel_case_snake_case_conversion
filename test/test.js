const should = require("chai").Should();
const { stringToSnakeCase, stringToCamelCase } = require("../src/app");

describe("Test String Case Convertion", () => {
  it("Should convert snake case text to camel case", () => {
    stringToCamelCase("package_name").should.equal("packageName");
  });

  it("Should convert camel case text to snake case", () => {
    stringToSnakeCase("packageName").should.equal("package_name");
  });
});