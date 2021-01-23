const fetchData = () => new Promise((resolve) => {
  resolve('penut butter')
})

test('the data is penut butter', () => {
  return fetchData().then((data) => {
    expect(data).toMatch('penut butter')
    expect(data).not.toMatch('almond')
  })
})

test('the data is penut butter by resolve', () => {
  return expect(fetchData()).resolves.toBe('penut butter')
})

test('the data is penut butter by async await', async () => {
  const data = await fetchData()
  expect(data).toMatch('penut butter')
})

const fetchDataError = () => new Promise((_, reject) => {
  reject('penut butter error')
})

test('the fetch fails with an error', () => {
  expect.assertions(1)
  return fetchDataError().catch(e => expect(e).toMatch('penut butter error'))
})

test('the fetch fails with an error by reject', () => {
  return expect(fetchDataError()).rejects.toMatch('penut butter error')
})

test('the fetch filas with an error by async error', async () => {
  expect.assertions(1)
  try {
    await fetchDataError()
  } catch(e) {
    expect(e).toMatch('penut butter error')
  }
})
