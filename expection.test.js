
const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK')
}

test('coompiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  expect(() =>  compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/) // 正規表現でマッチできる
  expect(() => compileAndroidCode()).toThrow(/^you .* JDK$/)
  expect(() => compileAndroidCode()).toThrow(/are using/)
})
