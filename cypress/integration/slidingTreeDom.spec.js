'use strict';

describe(('Sliding tree'), () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.tree > :nth-child(1) > ul').as('fruits');
    cy.get('.tree > :nth-child(2) > ul').as('fishes');
  });

  it(`Click on the headline should hide/show first level <ul> elements`, () => {
    cy.contains('Fruit').click();
    cy.get('@fruits').should('not.be.visible');

    cy.contains('Fruit').click();
    cy.get('@fruits').should('be.visible');
  });

  it(`Click on the headline should hide/show second level ul elements`, () => {
    cy.contains('Red').click();
    cy.get('@fruits').find(':nth-child(1) > ul').should('not.be.visible');

    cy.contains('Yellow').click();
    cy.get('@fruits').find(':nth-child(2) > ul').should('not.be.visible');

    cy.contains('Red').click();
    cy.get('@fruits').find(':nth-child(1) > ul').should('be.visible');

    cy.contains('Yellow').click();
    cy.get('@fruits').find(':nth-child(2) > ul').should('be.visible');
  });

  it(`Click on the headline should hide/show first level ul elements`, () => {
    cy.contains('Fish').click();
    cy.get('@fishes').should('not.be.visible');

    cy.contains('Fish').click();
    cy.get('@fishes').should('be.visible');
  });

  it(`Click on the headline should hide/show second level <ul> elements`, () => {
    cy.contains('Ocean fishes').click();
    cy.get('@fishes').find(':nth-child(1) > ul').should('not.be.visible');

    cy.contains('Freshwater fish').click();
    cy.get('@fishes').find(':nth-child(2) > ul').should('not.be.visible');

    cy.contains('Ocean fishes').click();
    cy.get('@fishes').find(':nth-child(1) > ul').should('be.visible');

    cy.contains('Freshwater fish').click();
    cy.get('@fishes').find(':nth-child(2) > ul').should('be.visible');
  });
});
