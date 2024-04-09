describe("Write a test that checks that when data is put into the form, the value is reflected in that form input.", () => {
    beforeEach(() => {
        cy.intercept('GET', "http://localhost:3001/api/v1/reservations", 
        {
          statusCode: 200,
          fixture: "reservations"
        })
        cy.visit("http://localhost:3000")
      })
    it("should correctly reflect input values", () => {
        cy.get("input[name=name]").type("Dingus").should("have.value", "Dingus")
        .get("input[name=date]").type("2024-04-10").should("have.value", "2024-04-10")
        .get("input[name=time]").type("18:30").should("have.value", "18:30")
        .get("input[name=numGuests]").type(5).should("have.value", "05")
    })
})