


describe('Captcha App', () =>{
  describe('Pattern 1', () =>{
    const pattern = 1

    it('should return "1 + TWO" when in input is 1,1,1,2', () =>{
      let app = new Captha(pattern,1,1,2)
      expect(app.generate().toEqual('1 + TWO'))
    })
  })
  describe('Pattern is 2', () =>{
    const pattern = 2

    it('should return "THREE + 5" when in input is 2,2,3,5', () =>{
      expect(createApp(pattern, 2, 3, 5).toEqual('THREE + 5'))
    })
  })
})


function createApp(pattern, operator, leftOperand, rightOperand){
  return new Captcha(pattern, operator, leftOperand, rightOperand)
}
