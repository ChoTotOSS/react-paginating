describe("Running react paginating tests", function() {
  it("https://davidnguyen179.github.io/react-paginating-demo/", function() {
    cy.visit("https://davidnguyen179.github.io/react-paginating-demo/");
    let unSelectedPages = [2, 3, 4, 5];

    unSelectedPages.map(function(page, index) {
      cy.get(`[data-value="${page}"]`).should($el => {
        expect($el).to.not.have.css("background-color", "rgb(253, 206, 9)");
      });
    });

    // click to page 2
    unSelectedPages = [1, 3, 4, 5];
    cy.contains("2").click();
    unSelectedPages.map(function(page, index) {
      cy.get(`[data-value="${page}"]`).should($el => {
        expect($el).to.not.have.css("background-color", "rgb(253, 206, 9)");
      });
    });
    cy.get('[data-value="2"]').should($el => {
      expect($el).to.have.css("background-color", "rgb(253, 206, 9)");
    });

    // click to page 3
    unSelectedPages = [1, 2, 4, 5];
    cy.contains("3").click();
    unSelectedPages.map(function(page, index) {
      cy.get(`[data-value="${page}"]`).should($el => {
        expect($el).to.not.have.css("background-color", "rgb(253, 206, 9)");
      });
    });
    cy.get('[data-value="3"]').should($el => {
      expect($el).to.have.css("background-color", "rgb(253, 206, 9)");
    });

    // click next
    unSelectedPages = [1, 2, 3, 5];
    cy.contains(">").click();
    unSelectedPages.map(function(page, index) {
      cy.get(`[data-value="${page}"]`).should($el => {
        expect($el).to.not.have.css("background-color", "rgb(253, 206, 9)");
      });
    });
    cy.get('[data-value="4"]').should($el => {
      expect($el).to.have.css("background-color", "rgb(253, 206, 9)");
    });

    // click first
    unSelectedPages = [2, 3, 4, 5];
    cy.contains("first").click();
    unSelectedPages.map(function(page, index) {
      cy.get(`[data-value="${page}"]`).should($el => {
        expect($el).to.not.have.css("background-color", "rgb(253, 206, 9)");
      });
    });
    cy.get('[data-value="1"]').should($el => {
      expect($el).to.have.css("background-color", "rgb(253, 206, 9)");
    });

    // click next
    unSelectedPages = [1, 3, 4, 5];
    cy.contains(">").click();
    unSelectedPages.map(function(page, index) {
      cy.get(`[data-value="${page}"]`).should($el => {
        expect($el).to.not.have.css("background-color", "rgb(253, 206, 9)");
      });
    });
    cy.get('[data-value="2"]').should($el => {
      expect($el).to.have.css("background-color", "rgb(253, 206, 9)");
    });

    // click last
    unSelectedPages = [1, 2, 3, 4];
    cy.contains("last").click();
    unSelectedPages.map(function(page, index) {
      cy.get(`[data-value="${page}"]`).should($el => {
        expect($el).to.not.have.css("background-color", "rgb(253, 206, 9)");
      });
    });
    cy.get('[data-value="5"]').should($el => {
      expect($el).to.have.css("background-color", "rgb(253, 206, 9)");
    });
  });
});
