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
function Left(pattern,leftOperand){
  this.toString = function(){
    if(pattern === 1){
      if(leftOperand === 0){ return '0'; }
      else if(leftOperand === 1){ return '1';}
      else if(leftOperand === 2){ return '2';}
      else if(leftOperand === 3){ return '3';}
      else if(leftOperand === 4){ return '4';}
      else if(leftOperand === 5){ return '5';}
      else if(leftOperand === 6){ return '6';}
      else if(leftOperand === 7){ return '7';}
      else if(leftOperand === 8){ return '8';}
      else if(leftOperand === 9){ return '9';}
    }
    else if(pattern === 2){
      if(leftOperand === 0){ return 'ZERO';}
      else if(leftOperand === 1){ return 'ONE';}
      else if(leftOperand === 2){ return 'TWO'; }
      else if(leftOperand === 3){ return 'THREE';}
      else if(leftOperand === 4){ return 'FOUR';}
      else if(leftOperand === 5){ return 'FIVE';}
      else if(leftOperand === 6){ return 'SIX';}
      else if(leftOperand === 7){ return 'SEVEN';}
      else if(leftOperand === 8){ return 'EIGHT';}
      else if(leftOperand === 9){ return 'NINE';}
    }

  }
}

function Right(pattern,rightOperand){
  this.toString = function(){

    if(pattern === 1){
      if(rightOperand === 0){ return 'ZERO';}
      else if(rightOperand === 1){ return 'ONE';}
      else if(rightOperand === 2){ return 'TWO'; }
      else if(rightOperand === 3){ return 'THREE';}
      else if(rightOperand === 4){ return 'FOUR';}
      else if(rightOperand === 5){ return 'FIVE';}
      else if(rightOperand === 6){ return 'SIX';}
      else if(rightOperand === 7){ return 'SEVEN';}
      else if(rightOperand === 8){ return 'EIGHT';}
      else if(rightOperand === 9){ return 'NINE';}
    }
  }
}

describe('Captcha App', () =>{
  describe('Pattern 1', () =>{
    const pattern = 1

    it('should return "0 + ZERO" when in input is 1,1,0,0', () =>{

      expect(createApp(pattern, 1, 0, 0)).toEqual('0 + ZERO');
    })
  })
  describe('Pattern is 2', () =>{
    const pattern = 2
  })
})
