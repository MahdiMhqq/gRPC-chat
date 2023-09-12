import Input from ".";

describe("<Input  />", () => {
  it("should render text input when input type does not pass", () => {
    //Arrange
    cy.mount(<Input />);
    const input = cy.get("input");

    //Assertion
    input.invoke("attr", "type").should("eq", "text");
  });

  it("should render password type input by default and toggle the type of input by clicking the eye (suffix) icon", () => {
    //Arrange
    cy.mount(<Input type="password" />);
    const inputWrapper = cy.get("[data-cy=my-input]");
    const suffixBtn = inputWrapper.find("[data-cy=my-input-suffix]");
    const input = inputWrapper.find("[data-cy=my-input-main]");

    //Act
    input.type("MyPassword123");
    input.should("have.value", "MyPassword123");

    input.invoke("attr", "type").should("eq", "password");

    suffixBtn.click();
    input.invoke("attr", "type").should("eq", "text");
  });
});
