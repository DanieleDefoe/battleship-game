/* eslint-disable no-undef */
import Ship from '../shipClass'

const carrier = new Ship('Carrier', 5)

describe('Creating a ship', () => {
  describe('with "Carrier", 5 arguments', () => {
    test('it should create a ship with name and length', () => {
      expect(carrier.name).toBe('Carrier')
      expect(carrier.length).toBe(5)
    })
  })

  describe('With proper arguments', () => {
    test('it should have "damage" prop with value 0', () => {
      expect(carrier.damage).toBe(0)
    })
  })
})

describe('#hit', () => {
  test('it should icrease "damage" prop by 1', () => {
    carrier.hit()
    expect(carrier.damage).toBe(1)
    carrier.hit()
    expect(carrier.damage).toBe(2)
  })
})

describe('#isSunk', () => {
  test('it should return true if "damage" = "length"', () => {
    carrier.damage = carrier.length
    expect(carrier.isSunk()).toBeTruthy()
  })
})
