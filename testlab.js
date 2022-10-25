const testFn = require('./lab')

test('output#1', () => {
  expect(testFn([5, 10, 15], [2, 4, 6, 7])).toStrictEqual([
    5, 10, 15, 2, 4, 6, 7
  ])
})

test('output#2', () => {
  expect(testFn([], ['item1', 'item2', 'item3'])).toStrictEqual([
    'item1',
    'item2',
    'item3'
  ])
})

