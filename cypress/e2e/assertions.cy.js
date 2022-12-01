//https://docs.cypress.io/guides/references/assertions
describe('Assertions',()=>{
    it('implicit Assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm').and('not.contain',"apple")

        cy.title()
            .should('eq','OrangeHRM')
            .should('include','HRM')
            .should('contain','Orange')
        
            cy.get('.orangehrm-login-branding > img')
                .should('be.visible')
                .should('exist')
    });


    it('implicit multiple should Assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url()
            .should('include','orangehrmlive')
            .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain','orangehrm')
            .and('not.contain',"apple")
        cy.title()
            .should('eq','OrangeHRM')
            .should('include','HRM')
            .should('contain','Orange')
        
            cy.get('.orangehrm-login-branding > img')
                .should('be.visible')
                .should('exist')
    });

    it('implicit multiple should with and Assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url()
            .should('include','orangehrmlive')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','orangehrm')
            .and('not.contain',"apple")
        cy.title()
            .should('eq','OrangeHRM')
            .should('include','HRM')
            .should('contain','Orange')
        cy.get('.orangehrm-login-branding > img')
            .should('be.visible')
            .should('exist')

        cy.xpath('//a')
            .should('have.length',5)
            .should('have.length.above',4)
            .should('not.have.length.above',10)

        cy.xpath("//input[@placeholder='Username']").type('John')
        cy.xpath("//input[@placeholder='Username']").should('have.value','John')
    })


    it('Explicit Assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//input[@placeholder='Username']").type('Admin')
        cy.xpath("//input[@placeholder='Password']").type('admin123')
        cy.get("button[type=submit]").click()

        let expName1='Paul Collings'
        let expName2='Pauls'

        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actName = x.text()
            
            // BDD style
            expect(expName1).to.equal(actName)
            expect(expName2).not.to.equal(actName)
            
            // TDD style
            assert.equal(actName, expName1)
            assert.notEqual(actName, expName2)
        })
    })
})