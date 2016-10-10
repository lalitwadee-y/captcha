describe('Captcha App', () =>{
  describe('Pattern 1', () =>{
    it('should return "1 + TWO" when in input is 1,1,1,2', () =>{
      expect(app.generate().toEqual('1 + TWO'))
    })
  })
})
