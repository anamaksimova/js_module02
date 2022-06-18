// / <reference types="cypress" />
import '../../script.js';

describe('Валидация Card Holder ', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });
  it('одно слово', () => {
    cy.get('.input__holder').type('ANNA');
    cy.get('.valid').click();
    cy.get('.input__holder').should('have.class', 'just-validate-error-field');
  });
  it('кириллица', () => {
    cy.get('.input__holder').type('АННА');
    cy.get('.valid').click();
    cy.get('.input__holder').should('have.class', 'just-validate-error-field');
  });
  it('с цифрами', () => {
    cy.get('.input__holder').type('ANNA5');
    cy.get('.valid').click();
    cy.get('.input__holder').should('have.class', 'just-validate-error-field');
  });
});


describe('Валидация Card Number ', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });
  it('латиница', () => {
    cy.get('.input__number').type('ANNAANNAANNAANNA');
    cy.get('.valid').click();
    cy.get('.input__number').should('have.class', 'just-validate-error-field');
  });
  it('кириллица', () => {
    cy.get('.input__number').type('АННААННААННААННА');
    cy.get('.valid').click();
    cy.get('.input__number').should('have.class', 'just-validate-error-field');
  });
  it('латиница', () => {
    cy.get('.input__number').type('ANNA,NNAANNAANNA');
    cy.get('.valid').click();
    cy.get('.input__number').should('have.class', 'just-validate-error-field');
  });
});
