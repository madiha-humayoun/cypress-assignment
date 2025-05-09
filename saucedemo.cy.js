import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';

describe('SauceDemo Tests', () => {

  it('Should display error on invalid login', () => {
    loginPage.visit();
    loginPage.enterUsername('wrong_user');
    loginPage.enterPassword('wrong_pass');
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('be.visible').and('contain', 'Username and password do not match');
  });

  it('Should login successfully and land on homepage', () => {
    cy.login('standard_user', 'secret_sauce');
    homePage.verifyHomePage();
  });

  it('Should click on product and land on product page', () => {
    cy.login('standard_user', 'secret_sauce');
    homePage.verifyHomePage();
    homePage.clickOnProduct();
    homePage.verifyProductPage();
  });

});
            