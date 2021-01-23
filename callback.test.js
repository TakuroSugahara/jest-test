
const fetchData = callback => {
  callback('penut butter')
}

test('the data is peanut butter', done => {
  const callback = (data) => {
    try {
      expect(data).toBe('penut butter')
      done()
    } catch (error) {
      done(error)
    }
  }
  fetchData(callback)
})
