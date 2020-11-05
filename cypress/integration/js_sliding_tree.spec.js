/* eslint-disable strict */
/* eslint-disable max-len */
describe(('Tests for sliding tree.'), () => {
  before(() => {
    cy.visit('/');
  });

  it('Fruits block.', () => {
    cy.contains('Red').click();

    cy.get('body').then(($body) => {
      if ($body.find('[hidden]').length > 0) {
        cy.get('.tree > :nth-child(1) > ul > :nth-child(1) > ul').should('have.attr', 'hidden');
      } else {
        cy.get('.tree > :nth-child(1) > ul > :nth-child(1) > ul').should('have.attr', 'style', 'display: none;');
      };
    });
    cy.contains('Red').click();

    cy.contains('Yellow').click();

    cy.get('body').then(($body) => {
      if ($body.find('[hidden]').length > 0) {
        cy.get('.tree > :nth-child(1) > ul > :nth-child(2) > ul').should('have.attr', 'hidden');
      } else {
        cy.get('.tree > :nth-child(1) > ul > :nth-child(2) > ul').should('have.attr', 'style', 'display: none;');
      };
    });
    cy.contains('Yellow').click();

    cy.contains('Fruit').click();

    cy.get('body').then(($body) => {
      if ($body.find('[hidden]').length > 0) {
        cy.get('.tree > :nth-child(1) > ul').should('have.attr', 'hidden');
      } else {
        cy.get('.tree > :nth-child(1) > ul').should('have.attr', 'style', 'display: none;');
      };
    });
    cy.contains('Fruit').click();    
  });

  it('Fish block.', () => {
    cy.contains('Ocean fishes').click();

    cy.get('body').then(($body) => {
      if ($body.find('[hidden]').length > 0) {
        cy.get('.tree > :nth-child(2) > ul > :nth-child(1) > ul').should('have.attr', 'hidden');
      } else {
        cy.get('.tree > :nth-child(2) > ul > :nth-child(1) > ul').should('have.attr', 'style', 'display: none;');
      };
    });
    cy.contains('Ocean fishes').click();

    cy.contains('Freshwater fish').click();

    cy.get('body').then(($body) => {
      if ($body.find('[hidden]').length > 0) {
        cy.get('.tree > :nth-child(2) > ul > :nth-child(2) > ul').should('have.attr', 'hidden');
      } else {
        cy.get('.tree > :nth-child(2) > ul > :nth-child(2) > ul').should('have.attr', 'style', 'display: none;');
      };
    });
    cy.contains('Freshwater fish').click();

    cy.contains('Fish').click();

    cy.get('body').then(($body) => {
      if ($body.find('[hidden]').length > 0) {
        cy.get('.tree > :nth-child(2) > ul').should('have.attr', 'hidden');
      } else {
        cy.get('.tree > :nth-child(2) > ul').should('have.attr', 'style', 'display: none;');
      };
    });
    cy.contains('Fish').click();
  });
});
