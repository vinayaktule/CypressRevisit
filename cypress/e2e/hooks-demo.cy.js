// execution flow

// before       : setup
// after        : teardown
// beforeEach   : once before each test
// afterEach    : once after each test


describe("Hook demo",()=>{

    before("Hooks setup before tests",()=>{
        cy.log("#####Hooks setup before tests#####");
    })

    after("Hooks setup after tests",()=>{
        cy.log("----Hooks teardown after tests----");
    })

    beforeEach("Login to application : before each test",()=>{
        cy.log("#####Login to application#####")
    })

    afterEach("Logout to application : after each test",()=>{
        cy.log("----Logout from application----")
    })

    it("Test Case #1",()=>{
        cy.log("Test Case #1 : Search Item executed");
    })

    it("Test Case #3",()=>{
        cy.log("Test Case #3 : Sort Products executed");
    })

    it("Test Case #2",()=>{
        cy.log("Test Case #2 : Advanced Search executed");
    })

    it.skip("Test Case #4 for skipping",()=>{
        cy.log("Test Case #2 : Skipping test executed");
    })

    // it.only("Test Case #5 for only test execution",()=>{
    //     cy.log("Test Case #5.1 : Only test executed");
    // })

    // it.only("Test Case #5 for only test execution",()=>{
    //     cy.log("Test Case #5.2 : Only test executed");
    // })
})