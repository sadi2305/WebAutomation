
describe('UniteLiving', function() 
{
    

    before(function() 
        {
            cy.fixture('example').then(function(data) 
            {
                this.data=data
            })
        })

    it('Verify the login', function() 
    {
        
      
        cy.visit('https://testpartner.dev.uniteliving.com/find-home')
        cy.get('#sign-in-dropdown > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .form-control').should('be.visible').should('be.enabled').type(this.data.email)
        cy.get(':nth-child(2) > .form-control').should('be.visible').should('be.enabled').type(this.data.password)
        cy.get(':nth-child(3) > .btn').should('be.visible').click()
        cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
        cy.get(':nth-child(4) > .logout').click()
        

    })

    
    

  })