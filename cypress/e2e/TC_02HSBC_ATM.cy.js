
describe('This spec will be used to test the ATM search functionality', () => {

beforeEach(() => { 
    cy.visit('https://www.hsbc.co.in/')
  })
    it('Validate the ATM search', () => {
      cy.xpath("//div[@class='footer-main']//li[2]//a").click();
      cy.url().should('include','ways-to-bank/branches/');
      cy.contains('h1','Branches & ATMs').should('be.visible');
      cy.xpath("//a[@id= 'content_main_button_1']/child::span[1]").click();

      cy.wait(4000);
      cy.xpath("(//input[@id='searchInput'])[1]").type('India');

      cy.get('#searchInput').type('{downarrow}').type('{enter}');

      cy.get("h2[class='_1521gYSzrNIMk9R-rS4Hur']").should('include.text', 'Rajbhavan Road');
      cy.get("button[aria-label='Show more results']").click();
      cy.xpath("(//span[@class='_1OVu0dKjGeodXsBo3rrQ-i'])[2]").contains('2');

      //Check social media



      cy.get('#content_socialmediafooterlink_1').should('have.attr', 'href');
      cy.get('#content_socialmediafooterlink_2').should('have.attr', 'href');
      cy.get('#content_socialmediafooterlink_3').should('have.attr', 'href');
      cy.get('#content_socialmediafooterlink_4').should('have.attr', 'href');

      cy.get("div[class='header-logo lg-2'] a").click();
      
      cy.title().should('contain', 'HSBC');

      cy.get("div[class='footer-bottom'] li:nth-child(3) a:nth-child(1)").scrollIntoView().click();
      cy.get("div[class='sm-12'] h1").should('contain', 'Privacy Statement');
      











      
      


      
      
    
  


      




      
      
      //.contains('Rajbhavan Road')

      
    

    });

});