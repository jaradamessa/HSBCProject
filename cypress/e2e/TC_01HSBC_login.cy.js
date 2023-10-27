describe('template spec', () => {
    it ('login', () => {
      cy.visit('https://www.hsbc.co.in/')
      cy.get('div[class="header-logo lg-2"]').find("img").should('be.visible')
      cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')
      cy.contains('Log On').click({force:true})
      cy.contains('Continue').should('be.visible').and('not.be.enabled');
      cy.get('#username').type('randomemail@example.com');
      cy.contains('Continue').should('be.visible').and('be.enabled');
      cy.get('#rememberMe').should('not.be.checked');
      cy.get('#username_help_link > span >span.icon.icon-circle-help-solid.help-icon').should('be.visible').click({force:true});
      cy.contains('Username').should('be.visible');
      cy.get('#username_help_link > span >span.icon.icon-circle-help-solid.help-icon').should('be.visible').click({force:true});
      cy.get('#username_submit_btn').click();
      cy.get('#errServerUsername').should('be.visible');
    })
  })
  