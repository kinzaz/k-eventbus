import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import kEventbus from "../src";
chai.use(sinonChai);

describe("k-eventbus", () => {
  it("should default export be a function", () => {
    expect(kEventbus).to.be.a("function");
  });
});
