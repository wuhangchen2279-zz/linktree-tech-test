describe('test acceptance criteria', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display three types of link', () => {
    cy.get('a').should('have.length', 3)
    cy.get('a').first().should('have.text', 'classic link')
    cy.get('a').eq(1).should('have.text', 'show link')
    cy.get('a').last().should('have.text', 'music link')
  })

  it('click music link will display music in different platforms', () => {
    cy.get('a').last().click()
    cy.get('[data-cy=musicBox]').should("be.visible")
    cy.get('[data-cy=Spotify]').should("be.visible")
    cy.get('[data-cy=Soundcloud]').should("be.visible")
  })

  it('click shows link will display 2 shows', () => {
    cy.get('a').eq(1).click()
    cy.get('[data-cy=detailRow]').should('have.length', 2)
  })

  it('When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes', () => {
    cy.get('a').last().click()
    cy.get('[data-cy=Spotify]').should("be.visible")
    cy.get('a').eq(1).click()
    cy.get('[data-cy=Spotify]').should("not.exist")
  })

})
