'use strict';

Cypress.Commands.add('toggleTree', (selector) => {
  cy.contains(selector).click();
  cy.contains(selector).parent().find('ul').should('not.be.visible');
  cy.contains(selector).click();
  cy.contains(selector).parent().find('ul').should('be.visible');
});

describe('Sliding tree', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should hide/show first level <ul> elements by click `, () => {
    cy.toggleTree('Fruit');
    cy.toggleTree('Fish');
  });

  it(`should hide/show second level <ul> elements by click`, () => {
    cy.toggleTree('Red');
    cy.toggleTree('Yellow');
    cy.toggleTree('Ocean fishes');
    cy.toggleTree('Freshwater fish');
  });
});
