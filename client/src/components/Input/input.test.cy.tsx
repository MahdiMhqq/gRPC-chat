import Input from ".";

describe("<Input  />", () => {
  const inputTagSelector = "input";
  const suffixSelector = "[data-cy=my-input-suffix]";
  const prefixSelector = "[data-cy=my-input-prefix]";
  const showPassSelector = "[data-cy=my-input-pass-visible]";
  const hidePassSelector = "[data-cy=my-input-pass-invisible]";

  it("should render text input when input type does not pass", () => {
    cy.mount(<Input />);

    cy.get(inputTagSelector).should("have.attr", "type", "text");
  });

  it("should correctly call when suffix clicked", () => {
    const onSuffixClickSpy = cy.spy().as("onSuffixClickSpy");
    cy.mount(
      <Input type="suffix" suffix={"Suffix"} onSuffixClick={onSuffixClickSpy} />
    );

    cy.get(suffixSelector).click();
    cy.get("@onSuffixClickSpy").should("be.calledOnce");
  });

  it("should correctly call when prefix clicked", () => {
    const onPrefixClickSpy = cy.spy().as("onPrefixClickSpy");
    cy.mount(
      <Input type="suffix" prefix={"Prefix"} onPrefixClick={onPrefixClickSpy} />
    );

    cy.get(prefixSelector).click();
    cy.get("@onPrefixClickSpy").should("be.calledOnce");
  });

  it("should render password type input by default and toggle the type of input by clicking the eye (suffix) icon", () => {
    cy.mount(<Input type="password" />);

    cy.get(inputTagSelector).type("MyPassword123");
    cy.get(inputTagSelector).should("have.value", "MyPassword123");

    cy.get(showPassSelector).should("be.visible");
    cy.get(inputTagSelector).should("have.attr", "type", "password");

    cy.get(showPassSelector).click();
    cy.get(inputTagSelector).should("have.attr", "type", "text");

    cy.get(hidePassSelector).should("be.visible");
  });
});
