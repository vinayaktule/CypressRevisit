describe('UI element Locators', ()=>{
    it('Radio Button',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.title()
            .should('contains','- Testautomation practice page')

        cy.get("input#female").click()
    });
})