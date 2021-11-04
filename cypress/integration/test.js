'use strict';

beforeEach(() => {
  cy.task('resetDb');
});

describe('more info about the cupcake', () => {
  it('looking at the cupcake', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('All Cupcakes').click();
    cy.contains('Read more').click();
    cy.url().should('include', '/products/1');
  });
});

describe('product', () => {
  it('see all cupcakes', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('All Cupcakes').click();
    cy.url().should('include', '/products');
  });
});

describe('filter the cupCakes', () => {
  it('filter', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('input').type('2.5');
  });
});
