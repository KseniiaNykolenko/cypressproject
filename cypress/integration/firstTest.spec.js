/// <reference types="Cypress" />

it('By ID', ()=>{
    cy.visit ("https://facebook.com/");
    cy.get('#email');
})

it('By class', ()=>{
    cy.visit ("https://docs.cypress.io/");
    cy.get('.DocSearch');

})

it('By teg', ()=>{
    cy.visit ("https://docs.cypress.io/");
    cy.get('nav');

})

it('By teg value', ()=>{
    cy.visit ("https://facebook.com/");
    cy.get('[name="pass"]');
})

it('By different teg value', ()=>{
    cy.visit ("https://facebook.com/");
    cy.get('[data-testid="open-registration-form-button"][role="button"]');
})

it('By different types', ()=>{
    cy.visit ("https://gtmetrix.com/");
    cy.get('button[type="submit"]');
})

it.only('By Containce name', ()=>{
    cy.visit ("https://next.privat24.ua/");
    cy.get('*[class^="card"]');
})