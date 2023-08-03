context("GET /users", () => {
  it("add 1 to the current visitor counts", () => {
    cy.request(
      "GET",
      "https://x3tsc8hfmg.execute-api.us-east-1.amazonaws.com/go/mysite"
    )
      .its('body.count')
      .then((currentCount) => {
        cy.request(
          "GET",
          "https://x3tsc8hfmg.execute-api.us-east-1.amazonaws.com/go/mysite"
        )
          .its('body.count')
          .should('eq', currentCount + 1);
      });
  });
});

