describe("Test overall page", () => {
  it("check if homepage loads corectly", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Get better understanding of");
    cy.get(".startbtn").contains("Start Visualizing");
    cy.get(".comparebtn").contains("Compare");

    cy.get(".bottom-nav").contains("Searching Algorithms").click();
    cy.get(".dropdown-search").select("Linear Search");
    cy.get("[data-test-id='array-length']").type("10");
    cy.get("[data-test-id='array-key']").type("15");
    cy.get(".array-container").get(".a-box").should("have.length", 10);
    cy.get(".primary-button").contains("Search").click();
    cy.wait(10000);
    cy.go("back");

    cy.get(".bottom-nav").contains("Searching Algorithms").click();
    cy.get(".dropdown-search").select("Binary Search");
    cy.get("[data-test-id='array-length']").type("10");
    cy.get(".array-container").get(".a-box").should("have.length", 10);
    cy.get("[data-test-id='array-key']").type("15");
    cy.get(".primary-button").contains("Search").click();
    cy.wait(10000);
    cy.go("back");

    cy.get(".bottom-nav").contains("Sorting Algorithms").click();
    cy.get(".dropdown-search").select("Selection Sort");
    cy.get("[data-test-id='array-length']").type("7");
    cy.get(".array-container").get(".a-box").should("have.length", 7);
    cy.get(".primary-button").contains("Sort").click();
    cy.wait(10000);
    cy.go("back");

    cy.get(".bottom-nav").contains("Sorting Algorithms").click();
    cy.get(".dropdown-search").select("Bubble Sort");
    cy.get("[data-test-id='array-length']").type("7");
    cy.get(".array-container").get(".a-box").should("have.length", 7);
    cy.get(".primary-button").contains("Sort").click();
    cy.wait(10000);
    cy.go("back");
  });
});
