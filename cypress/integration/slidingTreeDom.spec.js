/* eslint-disable strict */
/* eslint-disable max-len */
/// <reference types = "Cypress" />

describe(('Sliding tree'), () => {
  before(() => {
    cy.visit('/');
  });

  it(`Click on the headline should hide elements for fruits block`, () => {
    cy.contains('Red').click();
    cy.get('.tree > :nth-child(1) > ul > :nth-child(1) > ul').should('not.be.visible');

    cy.contains('Yellow').click();
    cy.get('.tree > :nth-child(1) > ul > :nth-child(2) > ul').should('not.be.visible');

    cy.contains('Fruit').click();
    cy.get('.tree > :nth-child(1) > ul').should('not.be.visible');
  });

  it(`Click on the headline should show elements for fruits block`, () => {
    cy.contains('Fruit').click();
    cy.get('.tree > :nth-child(1) > ul').should('be.visible');

    cy.contains('Red').click();
    cy.get('.tree > :nth-child(1) > ul > :nth-child(1) > ul').should('be.visible');

    cy.contains('Yellow').click();
    cy.get('.tree > :nth-child(1) > ul > :nth-child(2) > ul').should('be.visible');
  });

  it(`Click on the headline should hide elements for fish block`, () => {
    cy.contains('Ocean fishes').click();
    cy.get('.tree > :nth-child(2) > ul > :nth-child(1) > ul').should('not.be.visible');

    cy.contains('Freshwater fish').click();
    cy.get('.tree > :nth-child(2) > ul > :nth-child(2) > ul').should('not.be.visible');

    cy.contains('Fish').click();
    cy.get('.tree > :nth-child(2) > ul').should('not.be.visible');
  });

  it(`Click on the headline should show elements for fish block`, () => {
    cy.contains('Fish').click();
    cy.get('.tree > :nth-child(2) > ul').should('be.visible');

    cy.contains('Ocean fishes').click();
    cy.get('.tree > :nth-child(2) > ul > :nth-child(1) > ul').should('be.visible');

    cy.contains('Freshwater fish').click();
    cy.get('.tree > :nth-child(2) > ul > :nth-child(2) > ul').should('be.visible');
  });
});
