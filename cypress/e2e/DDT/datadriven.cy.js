// data driven test

describe("Validate data driven testing", ()=>{
    before(function(){
        cy.fixture('example').then(function(data){
            //this.data = data;
            global.data = data; // will applicable in all scope 
        });
    })
    
    beforeEach(function(){
        cy.visit('https://www.google.com/');
    })

    it("Verify Search functionality using DDT",()=>{
        
        cy.get('input[name=q]')
            .type(data.textforsearch)
            .type('{enter}')
    });
})