describe("Write a test to check the user flow of adding a new reservation to the page.", () => {
    beforeEach(() => {
        cy.intercept('GET', "http://localhost:3001/api/v1/reservations", 
        {
          statusCode: 200,
          fixture: "reservations"
        })
        cy.visit("http://localhost:3000")
      })
    
    it("should correctly add a reservation on form submit", () => {
        cy.get("input[name=name]").type("Dingus")
        .get("input[name=date]").type("2024-04-10")
        .get("input[name=time]").type("18:30")
        .get("input[name=numGuests]").type(5)
        .get(".reservation-form-button").click()
        .get('.reservation-card').last().contains("h2", "Dingus")
        .get('.reservation-card').last().contains("p", "2024-04-10")
        .get('.reservation-card').last().contains("p", "18:30")
        .get('.reservation-card').last().contains("p", "Number of guests 5")
    })
})