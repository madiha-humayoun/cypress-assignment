class HomePage {
  verifyHomePage() {
    cy.url().should('include', '/inventory.html');
  }

  clickOnProduct() {
    cy.get('.inventory_item').first().click();
  }

  verifyProductPage() {
    cy.url().should('include', '/inventory.html');
  }
}

export default new HomePage();
            