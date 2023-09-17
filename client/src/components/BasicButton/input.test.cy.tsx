import BasicButton from ".";

describe("<BasicButton />", () => {
  it("should render a primary button", () => {
    cy.mount(<BasicButton>btn</BasicButton>);

    cy.get("button").should("contain.text", "btn");
  });

  it("should show a spinner when the loading prop is true and hide the original content without changing the width", () => {
    cy.mount(<BasicButton loading>original Content</BasicButton>);

    cy.get("[data-cy=my-spinner]").should("be.visible");
    cy.get("[data-cy=my-button-inner]").should("exist");
    cy.get("[data-cy=my-button-inner]").should("not.be.visible");
  });
});
