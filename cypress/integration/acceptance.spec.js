/* globals cy, describe, it */

describe('Justchart homepage', () => {
  it('shows link to /', () => {
    cy.visit('http://localhost:8000')

    cy.contains('Just chart!')
  })
  it('can share', () => {
    cy.visit('http://localhost:8000')

    cy.get('.share').click()

    cy.contains('This is a shared chart')
    cy.url().should('contain', 'http://localhost:8000/?data=W1siMjA')
  })
  it('can edit dataset', () => {
    cy.visit('http://localhost:8000')

    cy.get('textarea')
    .type('{selectall}')
    .type(`[
      [
        "2018-07-20T19:53:03.260Z",
        10.715469526644192
      ],
      [
        "2018-07-23T05:09:56.681Z",
        5.578330477600748
      ],
      [
        "2018-07-26T05:00:23.827Z",
        14.101919610058577
      ],
      [
        "2018-07-28T02:54:57.535Z",
        5.003758584924595
      ]
    `)

    cy.contains('invalid')

    cy.get('textarea').type(`]`)
    cy.contains('valid')
  })
})
