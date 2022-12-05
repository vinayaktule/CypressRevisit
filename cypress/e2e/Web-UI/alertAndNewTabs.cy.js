/// <reference types="Cypress" />

// Alert text validation : Instant

describe("Validate Alert text",()=>{
    it("Alert text : ",()=>{
        cy.visit("http://www.seleniumframework.com/Practiceform/")
        cy.get('#alert').click();
        cy.on('window:alert',(str)=>{
              expect(str).to.equal("Please share this website with your friends and in your organization.")
        })
    })
})

// Alert text validation : Delayed

// describe("Validate Alert text",()=>{
//     it("Alert text : ",()=>{
//         cy.visit("http://www.seleniumframework.com/Practiceform/")
//         cy.get('#timingAlert').click();
//         cy.wait(6000)
//         cy.on('window:alert',(str)=>{
//             expect(str).to.equal("Please share this website with your friends and in your organization.")
//         })
//     })
// })

// New tab validation : 1 => Using invoke('removeAttr','target')

describe("Validate New Tab",()=>{
    it.only("New Tab Navigation : ",()=>{
        cy.visit("http://www.seleniumframework.com/Practiceform/")
        cy.get("button[onclick='newBrwTab()']").invoke('removeAttr','target').click;
        cy.wait(5000)
        
        cy.url().should('include','http://www.seleniumframework.com/')
        //cy.go('back') // cross origin policy error
    })
})

// New tab validation : 2 => Using prop function

describe("Validate New Tab 2",()=>{
    it("New Tab Navigation 2: ",()=>{
        cy.visit("http://www.seleniumframework.com/Practiceform/")
        cy.get("button[onclick='newBrwTab()']").then((data )=>{
            const tabdata = data.prop('href');
            //cy.wait(5000)
            cy.url().should('include','http://www.seleniumframework.com/')
            //cy.go('back') // cross origin frame error
        })  
    })
})