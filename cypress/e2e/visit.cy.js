describe("Write tests covering what should be displayed on the page when the user first visits." , () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3001/api/v1/reservations", 
    {
      statusCode: 200,
      fixture: "reservations"
    })
    cy.visit("http://localhost:3000")
  })
  
  it("should display a title", () => {
    cy.get("h1").contains("Turing Cafe Reservations")
  }) 
  it("should display first and last reservation cards", () => {
    cy.get('.reservation-card').first().contains("h2", "Christie")
    .get('.reservation-card').first().contains("p", "12/29")
    .get('.reservation-card').first().contains("p", "7:00")
    .get('.reservation-card').first().contains("p", "Number of guests 12")
  
    .get('.reservation-card').last().contains("h2", "Pam")
    .get('.reservation-card').last().contains("p", "1/21")
    .get('.reservation-card').last().contains("p", "6:00")
    .get('.reservation-card').last().contains("p", "Number of guests 4")
  })
})