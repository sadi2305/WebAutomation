
describe('UniteLiving', function() 
{
    it('Verify Title of the Page-positive', function() 
    {
      
        cy.visit('https://testpartner.dev.uniteliving.com/find-home')
        cy.title().should('eq','Find your perfect home for rent where you belong - Unite Living')

    })

    
    

  })