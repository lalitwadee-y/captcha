function createApp(pattern, operator, leftOperand, rightOperand){
  this.generate = function(){

<<<<<<< HEAD

  };
  let left = new Left();
  let oper = new Operator();
  let right = new Right();
=======
  }
>>>>>>> eea547b011d6000369ff6ac965f04dfa181020f8


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
<<<<<<< HEAD
  };
=======
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
>>>>>>> eea547b011d6000369ff6ac965f04dfa181020f8
}

function Right(pattern,rightOperand){
  this.toString = function(pattern,rightOperand){

<<<<<<< HEAD
      if(pattern === 1){
=======
    if(pattern === 1){
>>>>>>> eea547b011d6000369ff6ac965f04dfa181020f8
      if(rightOperand === 1){ return 'ZERO';}
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
    if(pattern === 2){
      if(rightOperand === 0){ return '0'; }
      else if(rightOperand === 1){ return '1';}
      else if(rightOperand === 2){ return '2';}
      else if(rightOperand === 3){ return '3';}
      else if(rightOperand === 4){ return '4';}
      else if(rightOperand === 5){ return '5';}
      else if(rightOperand === 6){ return '6';}
      else if(rightOperand === 7){ return '7';}
      else if(rightOperand === 8){ return '8';}
      else if(rightOperand === 9){ return '9';}
    }
  };
}

describe('Captcha App', () =>{
  describe('Pattern 1', () =>{
    const pattern = 1

    it('should return "0 + ZERO" when in input is 1,1,0,0', () =>{
      expect(createApp(pattern, 1, 0, 0)).toEqual('0 + ZERO');
    })
    it('should return "1 + ZERO" when in input is 1,1,1,0', () =>{
      expect(createApp(pattern, 1, 1, 0)).toEqual('1 + ZERO');
    })
    it('should return "2 + ZERO" when in input is 1,1,2,0', () =>{
      expect(createApp(pattern, 1, 2, 0)).toEqual('2 + ZERO');
    })
    it('should return "3 + ZERO" when in input is 1,1,3,0', () =>{
      expect(createApp(pattern, 1, 3, 0)).toEqual('3 + ZERO');
    })
    it('should return "4 + ZERO" when in input is 1,1,4,0', () =>{
      expect(createApp(pattern, 1, 4, 0)).toEqual('4 + ZERO');
    })
    it('should return "5 + ZERO" when in input is 1,1,5,0', () =>{
      expect(createApp(pattern, 1, 5, 0)).toEqual('5 + ZERO');
    })
    it('should return "6 + ZERO" when in input is 1,1,6,0', () =>{
      expect(createApp(pattern, 1, 6, 0)).toEqual('6 + ZERO');
    })
  })
  describe('Pattern is 2', () =>{
    const pattern = 2

    it('should return "FIVE + 4" when in input is 2,2,5,4', () =>{
        expect(createApp(pattern, 2, 5, 4)).toEqual('FIVE + 4');
    })
  })
})
