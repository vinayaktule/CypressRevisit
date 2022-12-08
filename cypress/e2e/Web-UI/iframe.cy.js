describe('iframe functionality',()=>{
    //https://rahulshettyacademy.com/AutomationPractice/
    it("Validation iframe handling : ",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("a[href*='learning-path']").eq(0).should('be.visible').click();
    //cy.iframe().find('a[data-id=javascript]').scrollIntoView().should('be.visible').click()
    });
})