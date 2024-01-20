describe("Dashboard test", () => {
  beforeEach(() => {
    cy.visit("/dashboard");
  });

  it("Checking UI", () => {
    cy.getDataTest("layout-dashboard")
      .find("header")
      .as("dashboard-header");

    cy.get("@dashboard-header")
      .find('a[role="button"]')
      .as("logout-button");

    cy.get("@logout-button")
      .contains("Logout")
      .should("be.visible");

    cy.getDataTest("layout-dashboard")
      .find(".container")
      .as("dashboard-container");

    cy.get("@dashboard-container")
      .find("button")
      .contains("Add Data")
      .should("be.visible");

    cy.get("@dashboard-container")
      .find("table")
      .then(($table) => {
        const nameColumnIndex = $table
          .find('th:contains("name")')
          .index();
        const fileColumnIndex = $table
          .find('th:contains("file")')
          .index();
        const statusColumnIndex = $table
          .find('th:contains("status")')
          .index();

        $table.find("tbody tr").each(($row) => {
          const name = $row
            .find(`td:eq(${nameColumnIndex})`)
            .text();
          const file = $row
            .find(`td:eq(${fileColumnIndex})`)
            .text();
          const status = $row
            .find(`td:eq(${statusColumnIndex})`)
            .text();

          cy.log(
            `Name: ${name}, File: ${file}, Status: ${status}`
          );
        });
      });
  });

  it.only("Adding Data", () => {
    cy.getDataTest("layout-dashboard")
      .find(".container")
      .as("dashboard-container");

    cy.getDataTest("form-modal").should("not.exist");

    cy.get("@dashboard-container").find("button").click();

    cy.getDataTest("form-modal").should("exist");

    cy.getDataTest("form-modal")
      .find('button[type="submit"]')
      .as("modal-submit");

    cy.getDataTest("form-modal")
      .find('footer button[type="button"]')
      .as("close-button");

    cy.getDataTest("form-modal").should("exist");

    cy.get("@close-button").click();

    cy.getDataTest("form-modal").should("not.exist");

    cy.get("@dashboard-container").find("button").click();

    cy.getDataTest("form-modal").should("exist");

    cy.get("@modal-submit").click();

    cy.contains("Nama wajib diisi!").should("exist");

    cy.contains("File wajib diisi!").should("exist");

    cy.contains("Status wajib diisi!").should("exist");

    cy.getDataTest("form-modal")
      .find("#name")
      .as("input-name");

    cy.getDataTest("form-modal")
      .find("#file")
      .as("input-file");

    cy.getDataTest("form-modal")
      .find("#status")
      .as("input-status");

    cy.get("@input-name").type("Daffa");

    cy.get("@input-file").selectFile(
      "C:/Myself/Road to get a job/cypress/project/code3.png",
      { force: true }
    );

    cy.get("@input-status").click();

    cy.get('[data-slot="content"]')
      .as("status-content")
      .should("exist");

    cy.get("@status-content")
      .find("li:nth-child(1)")
      .click();

    cy.get("@status-content").should("not.exist");

    cy.get("@dashboard-container")
      .find("tbody tr")
      .should("not.exist");

    cy.get("@modal-submit").click();

    cy.getDataTest("form-modal").should("not.exist");

    cy.get("@dashboard-container")
      .find("tbody tr")
      .should("exist");

    cy.getDataTest("layout-dashboard")
      .find("header")
      .as("dashboard-header");

    cy.get("@dashboard-header")
      .find('a[role="button"]')
      .as("logout-button");

    cy.get("@logout-button").click();

    cy.url().should("include", "/");
  });
});
