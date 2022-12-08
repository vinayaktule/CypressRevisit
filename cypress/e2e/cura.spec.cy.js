describe('Cura make appointment', function(){
    it('Visit URL',function(){
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
    });

    
    it('Click on appointment',function(){
        cy.get('#btn-make-appointment').click()
    });

    it('Login',function(){
        cy.get('#txt-username').clear().type("John Doe")
        cy.get('#txt-password').clear().type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
    });

    it('Make appointment',function(){
        // select   : #combo_facility
        // option   : option[value=Hongkong CURA Healthcare Center]
        
        cy.get('select').select('Hongkong CURA Healthcare Center')
        

        // cb       : #chk_hospotal_readmission
        cy.get('#chk_hospotal_readmission').click()

        // rb       : .radio_program_medicaid
        cy.get('#radio_program_medicaid').click()

        // calender : #txt_visit_date
        cy.get('#txt_visit_date').type('22/12/2022')

        // forced click
        cy.get('#txt_comment').click({force: true})
        //cy.get('#txt_comment').type('22/12/2022')

        // comment  : #txt_comment
        cy.get('#txt_comment').type("Appointment Confirmation Comment")

        // submit   : #btn-book-appointment
        cy.get('#btn-book-appointment', { timeout: 10000 }).click()
        
    });

    it('Verify appointment',function(){
        // confirmation : h2 Appointment Confirmation
        cy.contains('h2','Appointment Confirmation')
        cy.get('#comment').contains('Appointment Confirmation')
    });

})