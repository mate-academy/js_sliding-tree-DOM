'use strict';

Cypress.Commands.add('slideTree', (selector) => {
  cy.contains(selector).click();

  cy.contains(selector).parent().should(($ul) => {
    const isHidden = $ul.find('ul').is(':hidden');

    expect(isHidden).to.equal(true);
  });
  cy.contains(selector).click();

  cy.contains(selector).parent().should(($ul) => {
    const isVisible = $ul.find('ul').is(':visible');

    expect(isVisible).to.equal(true);
  });
});

describe(('Sliding tree'), () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should hide/show first level <ul> elements by click `, () => {
    cy.slideTree('Fruit');
    cy.slideTree('Fish');
  });

  it(`should hide/show second level <ul> elements by click`, () => {
    cy.slideTree('Red');
    cy.slideTree('Yellow');
    cy.slideTree('Ocean fishes');
    cy.slideTree('Freshwater fish');
  });
});
