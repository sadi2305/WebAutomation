
describe('UniteLiving', function() 
{
    it('Verify Title of the Page-positive', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/find-home')
        cy.title().should('eq','Find your perfect home for rent where you belong - Unite Living')

    })

    it('Verify the login', function() 
    {
        before(function() 
        {
            cy.fixture('example').then(function(data) 
            {
                this.data=data
            })
        })
      
        cy.visit('https://testpartner.dev.uniteliving.com/find-home')
        cy.get('#sign-in-dropdown > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .form-control').type('this.data.email')
        cy.get(':nth-child(2) > .form-control').type('this.data.password')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
        cy.get(':nth-child(4) > .logout').click()
        

    })

    it('Verify Title of the Page-positive', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/find-home')
        cy.get('#sign-up-dropdown > .dropdown-toggle').click()
        cy.get('.email-link-text').click()
        cy.get('#name').type('naruto')
        cy.get('#email').type('sadi.kmcltd@gmail.com')
        cy.get('#password').type('naruto23')
        cy.get('#confirm_password').type('naruto23')
        cy.get('.checkmark').click()
        cy.get(':nth-child(6) > .btn').click()

    })

    it('Verify the login', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/find-home')
        cy.get('#sign-in-dropdown > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .form-control').type('sadiidas2305@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('sadi12345')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
        cy.get(':nth-child(2) > .logout').click()
        

    })
    

  })