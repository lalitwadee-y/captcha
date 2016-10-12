function createApp(pattern, operator, leftOperand, rightOperand){
  this.generate = function(){


  }

  return (Left(pattern,leftOperand),Operator(operator),Right(pattern,rightOperand))


  //return new Captcha(pattern, operator, leftOperand, rightOperand)
}

function Operator(operator){
  this.toString = function(){
    if(operator === 1){
      return '+';
    }
    else if(operator === 2){
      return '-';
    }
  }
}

describe('Captcha App', () =>{
  describe('Pattern 1', () =>{
    const pattern = 1

    it('should return "1 + TWO" when in input is 1,1,1,2', () =>{

      expect(createApp(pattern, 1, 1, 2)).toEqual('1 + TWO');
    })
  })
  describe('Pattern is 2', () =>{
    const pattern = 2

    it('should return "THREE + 5" when in input is 2,2,3,5', () =>{
      expect(createApp(pattern, 2, 3, 5)).toEqual('THREE + 5');
    })
  })
})
