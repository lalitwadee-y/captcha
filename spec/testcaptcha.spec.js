function createApp(pattern, operator, leftOperand, rightOperand){
  this.generate = function(){

  };
  let left = new Left();
  let oper = new Operator();
  let right = new Right();

  return (left.toString(pattern,leftOperand) + ' ' + oper.toString(operator) + ' '+ right.toString(pattern,rightOperand))

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
    else if(pattern === 2){
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
    it('should return "7 + ZERO" when in input is 1,1,7,0', () =>{
      expect(createApp(pattern, 1, 7, 0)).toEqual('7 + ZERO');
    })
    it('should return "8 + ZERO" when in input is 1,1,8,0', () =>{
      expect(createApp(pattern, 1, 8, 0)).toEqual('8 + ZERO');
    })
    it('should return "9 + ZERO" when in input is 1,1,9,0', () =>{
      expect(createApp(pattern, 1, 9, 0)).toEqual('9 + ZERO');
    })
    it('should return "9 + FIVE" when in input is 1,1,9,5', () =>{
      expect(createApp(pattern, 1, 9, 5)).toEqual('9 + FIVE');
    })
    it('should return "9 + SIX" when in input is 1,1,9,6', () =>{
      expect(createApp(pattern, 1, 9, 6)).toEqual('9 + SIX');
    })
    it('should return "9 + SEVEN" when in input is 1,1,9,7', () =>{
      expect(createApp(pattern, 1, 9, 7)).toEqual('9 + SEVEN');
    })
    it('should return "9 + EIGHT" when in input is 1,1,9,8', () =>{
      expect(createApp(pattern, 1, 9, 8)).toEqual('9 + EIGHT');
    })
    it('should return "9 + NINE" when in input is 1,1,9,9', () =>{
      expect(createApp(pattern, 1, 9, 9)).toEqual('9 + NINE');
    })
    it('should return "0 - ZERO" when in input is 1,2,0,0', () =>{
      expect(createApp(pattern, 2, 0, 0)).toEqual('0 - ZERO');
    })
    it('should return "0 - ONE" when in input is 1,2,0,1', () =>{
      expect(createApp(pattern, 2, 0, 1)).toEqual('0 - ONE');
    })
    it('should return "0 - TWO" when in input is 1,2,0,2', () =>{
      expect(createApp(pattern, 2, 0, 2)).toEqual('0 - TWO');
    })
    it('should return "0 - THREE" when in input is 1,2,0,3', () =>{
      expect(createApp(pattern, 2, 0, 3)).toEqual('0 - THREE');
    })
    it('should return "0 - FOUR" when in input is 1,2,0,4', () =>{
      expect(createApp(pattern, 2, 0, 4)).toEqual('0 - FOUR');
    })
  })
  describe('Pattern is 2', () =>{
    const pattern = 2

    it('should return "ZERO + 5" when in input is 2,1,0,5', () =>{
        expect(createApp(pattern, 1, 0, 5)).toEqual('ZERO + 5');
    })
    it('should return "ZERO + 6" when in input is 2,1,0,6', () =>{
        expect(createApp(pattern, 1, 0, 6)).toEqual('ZERO + 6');
    })
    it('should return "ONE + 6" when in input is 2,1,1,6', () =>{
        expect(createApp(pattern, 1, 1, 6)).toEqual('ONE + 6');
    })
    it('should return "ONE + 7" when in input is 2,1,1,7', () =>{
        expect(createApp(pattern, 1, 1, 7)).toEqual('ONE + 7');
    })
    it('should return "TWO + 7" when in input is 2,1,2,7', () =>{
        expect(createApp(pattern, 1, 2, 7)).toEqual('TWO + 7');
    })
    it('should return "TWO + 8" when in input is 2,1,2,8', () =>{
        expect(createApp(pattern, 1, 2, 8)).toEqual('TWO + 8');
    })
    it('should return "THREE + 8" when in input is 2,1,3,8', () =>{
        expect(createApp(pattern, 1, 3, 8)).toEqual('THREE + 8');
    })
    it('should return "THREE + 9" when in input is 2,1,3,9', () =>{
        expect(createApp(pattern, 1, 3, 9)).toEqual('THREE + 9');
    })
    it('should return "FOUR + 9" when in input is 2,1,4,9', () =>{
        expect(createApp(pattern, 1, 4, 9)).toEqual('FOUR + 9');
    })
    it('should return "FOUR + 0" when in input is 2,1,4,0', () =>{
        expect(createApp(pattern, 1, 4, 0)).toEqual('FOUR + 0');
    })
    it('should return "NINE - 0" when in input is 2,2,9,0', () =>{
        expect(createApp(pattern, 2, 9, 0)).toEqual('NINE - 0');
    })
    it('should return "NINE - 1" when in input is 2,2,9,1', () =>{
        expect(createApp(pattern, 2, 9, 1)).toEqual('NINE - 1');
    })
    it('should return "EIGHT - 1" when in input is 2,2,8,1', () =>{
        expect(createApp(pattern, 2, 8, 1)).toEqual('EIGHT - 1');
    })
    it('should return "EIGHT - 2" when in input is 2,2,8,2', () =>{
        expect(createApp(pattern, 2, 8, 2)).toEqual('EIGHT - 2');
    })
    it('should return "SEVEN - 2" when in input is 2,2,7,2', () =>{
        expect(createApp(pattern, 2, 7, 2)).toEqual('SEVEN - 2');
    })
    it('should return "SEVEN - 3" when in input is 2,2,7,3', () =>{
        expect(createApp(pattern, 2, 7, 3)).toEqual('SEVEN - 3');
    })
    it('should return "SIX - 3" when in input is 2,2,6,3', () =>{
        expect(createApp(pattern, 2, 6, 3)).toEqual('SIX - 3');
    })
    it('should return "SIX - 4" when in input is 2,2,6,4', () =>{
        expect(createApp(pattern, 2, 6, 4)).toEqual('SIX - 4');
    })
    it('should return "FIVE - 4" when in input is 2,2,5,4', () =>{
        expect(createApp(pattern, 2, 5, 4)).toEqual('FIVE - 4');
    })
    it('should return "FIVE - 5" when in input is 2,2,5,5', () =>{
        expect(createApp(pattern, 2, 5, 5)).toEqual('FIVE - 5');
    })
  })
})
