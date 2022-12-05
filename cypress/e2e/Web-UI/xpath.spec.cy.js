describe('Xpath Locators', ()=>{
    it('find no. of products',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        
        cy.xpath("//input[@type='text']",{timeout:10000}).should('have.length',4)
    });
})