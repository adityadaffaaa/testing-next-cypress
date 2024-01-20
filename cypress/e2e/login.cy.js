describe("Login test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test login form", () => {
    cy.getDataTest("login-header").contains(/Login/i);

    cy.getDataTest("login-form")
      .find("#email")
      .as("login-email");

    cy.get("@login-email").type("example@gmail.com");

    cy.getDataTest("login-form")
      .find("#password")
      .as("login-password");

    cy.get("@login-password").type("1234");

    cy.getDataTest("login-form")
      .find('button[type="submit"]')
      .as("login-submit");

    cy.contains(/Password minimal 8 karakter!/i).should(
      "not.exist"
    );

    cy.get("@login-submit").click();

    cy.contains(/Password minimal 8 karakter!/i).should(
      "exist"
    );

    cy.getDataTest("button-password").click();

    cy.get("@login-password").invoke(
      "attr",
      "type",
      "text"
    );

    cy.get("@login-password").clear().type("password");

    cy.contains(/Password minimal 8 karakter!/i).should(
      "not.exist"
    );

    cy.getDataTest("button-password").click();

    cy.get("@login-password").invoke(
      "attr",
      "type",
      "password"
    );

    cy.contains(/Email tidak valid!/i).should("not.exist");

    cy.get("@login-email").clear().type("exam");

    cy.contains(/Email tidak valid!/i).should("exist");

    cy.get("@login-email")
      .clear()
      .type("example@gmail.com");

    cy.getDataTest("login-form")
      .contains(/Login failed!/i)
      .should("not.exist");

    cy.get("@login-submit").click();

    cy.getDataTest("login-form")
      .contains(/Login failed!/i)
      .should("not.exist");

    cy.get("@login-email").clear().type("aditya@gmail.com");

    cy.get("@login-submit").click();

    cy.url().should("include", "/dashboard");
  });
});
