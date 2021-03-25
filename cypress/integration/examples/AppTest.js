
describe('UniteLiving', function() 
{
    it('Verify Title of the Page', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/login')
        cy.title().should('eq','Unite Living - Find your best roommates and a home')

    })


    it('Verify the login-positive', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type('qa@gain.media')
        cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type('QATeam')
        cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
        cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
        cy.get(':nth-child(4) > .logout').click()
        
    })

    it('Verify the login-incorrect data with alert', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type('asd@gain.media')
        cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type('asdTeam')
        cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
        cy.on('window:alert', (str) =>{
            ecpect(str).to.equal("Couldn't log in.")
        })
        
    })

    it('Veryfy Join', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/login')
        cy.get('#sign-up-dropdown > .dropdown-toggle').click()
        cy.get('.email-link-text').click()
        cy.get('#name').type('naruto')
        cy.get('#email').type('sadi.kmcltd@gmail.com')
        cy.get('#password').type('naruto23')
        cy.get('#confirm_password').type('naruto23')
        cy.get('.checkmark').click()
        cy.get(':nth-child(6) > .btn').click()
        cy.on('window:alert', (str) =>
        {
            ecpect(str).to.equal("Couldn't log in.")
        })

    })

    //----------------------------------
    // uncommenting the below code will allow the system to create a new user
    //----------------------------------

    // it('Veryfy Join-Use new email', function() 
    // {
      
    //     cy.visit('https://testpartner.dev.uniteliving.com/login')
    //     cy.get('#sign-up-dropdown > .dropdown-toggle').click()
    //     cy.get('.email-link-text').click()
    //     cy.get('#name').type('naruto')
    //     cy.get('#email').type('naruto2@uzumaki.com')
    //     cy.get('#password').type('naruto23')
    //     cy.get('#confirm_password').type('naruto23')
    //     cy.get('.checkmark').click()
    //     cy.get(':nth-child(6) > .btn').click()
    //     cy.on('window:confirm', (str) =>
    //     {
    //         ecpect(str).to.equal("An email has been sent to your email address. Please follow the link to activate your account.")

    //     })
    //     cy.get(':nth-child(1) > [data-v-0ff58b9e=""] > :nth-child(1) > div > .btn').click()

    // })

    
    

  })