import { dateDisplayFormater } from '../helpers/date.helper'


describe('date.helpers Test', () => {

  it('Test dateDisplayFormater function', () => {
    let result = dateDisplayFormater(1524577306821)
    expect(result).toEqual('8:41 PM, 24 April 2018')
  })
  
})