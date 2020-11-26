'use strict';

Cypress.Commands.add('hideTree', (selector) => {
  cy.get('ul').contains(selector).click();

  cy.get('ul').contains(selector).parent().should(($ul) => {
    const ul = $ul.find('ul').is(':hidden');

    expect(ul).to.equal(true);
  });
  cy.get('ul').contains(selector).click();

  cy.get('ul').contains(selector).parent().should(($ul) => {
    const ul = $ul.find('ul').is(':visible');

    expect(ul).to.equal(true);
  });
});

describe(('Sliding tree'), () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should hide/show first level <ul> elements by click `, () => {
    cy.hideTree('Fruit');
    cy.hideTree('Fish');
  });

  it(`should hide/show second level <ul> elements by click`, () => {
    cy.hideTree('Red');
    cy.hideTree('Yellow');
    cy.hideTree('Ocean fishes');
    cy.hideTree('Freshwater fish');
  });
});
