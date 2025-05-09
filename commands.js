import loginPage from '../pages/loginPage';

Cypress.Commands.add('login', (username, password) => {
  loginPage.visit();
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});
            