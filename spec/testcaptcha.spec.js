function createApp(pattern, operator, leftOperand, rightOperand){
  this.generate = function(){


  };
  let left = new Left();
  let oper = new Operator();
  let right = new Right();


  console.log(left.toString(pattern,leftOperand));
  console.log(oper.toString(operator));
  console.log(right.toString(pattern,rightOperand));

  return (left.toString(pattern,leftOperand) + ' ' + oper.toString(operator) + ' '+ right.toString(pattern,rightOperand))


  //return new Captcha(pattern, operator, leftOperand, rightOperand)
}

function Operator(operator){
  this.toString = function(operator){
    if(operator === 1){
      return '+';
    }
    else if(operator === 2){
      return '-';
    }
  };
}
function Left(pattern,leftOperand){
  this.toString = function(pattern,leftOperand){
    if(pattern === 1){
      if(leftOperand === 0){ return '0'; }
      else if(leftOperand === 1){ return leftOperand;}
      else if(leftOperand === 2){ return '2';}
      else if(leftOperand === 3){ return '3';}
      else if(leftOperand === 4){ return '4';}
      else if(leftOperand === 5){ return '5';}
      else if(leftOperand === 6){ return '6';}
      else if(leftOperand === 7){ return '7';}
      else if(leftOperand === 8){ return '8';}
      else if(leftOperand === 9){ return '9';}
    }
  };
}

function Right(pattern,rightOperand){
  this.toString = function(pattern,rightOperand){

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
  };
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
