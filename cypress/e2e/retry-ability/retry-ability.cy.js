describe("Retry Mechanism in cypress:",()=>{
    it("Retry 2 times",()=>{
        expect(2).to.equal(2)
        expect(2**100).to.equal(2**100)
        // Cypress wait and re-excute the line in case of failure 
    })
})