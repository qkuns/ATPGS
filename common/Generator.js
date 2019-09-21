/*
  array: [
    question OBJ{
      Main: str,     //题干
      Option: {
          A: num,
          B: num,
          C: num,
          D: num,
       },
      trueAnswer: str
    }
  ]
 */


export function bornPaper(num, clas){
  //生成一道小学题目
  function Born_One_Primary(){
    let czNum = Math.floor(Math.random()*4)+2;
    let curr_czNum = 0;
    let curr_charNum = 0;
    let numArray = new Array();
    let charNumArray = new Array();
    let answer = 0;

    numArray[curr_czNum] = {left:"", value:Math.floor(Math.random()*100)+1, right:""};
    answer = numArray[0].value;
    curr_czNum++;

    while(curr_czNum < czNum){
      charNumArray[curr_charNum] = Math.floor(Math.random()*4)+1;
      numArray[curr_czNum] = {left:"", value:Math.floor(Math.random()*100)+1, right:""};
      if(curr_charNum-1>=0 && charNumArray[curr_charNum-1]<=2 && charNumArray[curr_charNum]>2){
        numArray[0].left = numArray[0].left + "(";
        numArray[curr_czNum-1].right = numArray[curr_czNum-1].right + ")";
      }
      answer = Answer(answer, bornChar(charNumArray[curr_charNum]), numArray[curr_czNum].value);
      curr_charNum++;
      curr_czNum++;
    }

    let select = {
      A:answer+Math.floor(Math.random()*5)+1,
      B:answer-Math.floor(Math.random()*5)-1,
      C:answer+(Math.floor(Math.random()*5)+6),
      D:answer-(Math.floor(Math.random()*5)-6)
    };

    let tureSelect = Math.floor(Math.random()*4);

    if(tureSelect==0){ select.A = answer; }
    else if(tureSelect==1){ select.B = answer; }
    else if(tureSelect==2){ select.C = answer;}
    else if(tureSelect==3){ select.D = answer;}

    let qMain = "";
    qMain = qMain + numArray[0].left + numArray[0].value + numArray[0].right;
    for(let i=0;i<curr_czNum-1;i++){
      qMain = qMain + bornChar(charNumArray[i]);
      qMain = qMain + numArray[i+1].left + numArray[i+1].value + numArray[i+1].right;
    }

    let wholeQuestion = {Main:qMain, Option:select, trueAnswer:tureSelect};
    return wholeQuestion;
  }

  //生成一道初中题目
  function Born_One_Middle(num){
    let czNum = Math.floor(Math.random()*4)+2;
    let curr_czNum = 0;
    let curr_charNum = 0;
    let numArray = new Array();
    let charNumArray = new Array();
    let answer = 0;

    let initValue01 = Math.floor(Math.random()*100)+1;
    numArray[curr_czNum] = {left:"", value:initValue01, realValue:initValue01, right:""};
    answer = numArray[0].value;
    curr_czNum++;

    let havetrans = 0;
    while(curr_czNum < czNum){
      charNumArray[curr_charNum] = Math.floor(Math.random()*4)+1;
      let initValue = Math.floor(Math.random()*100)+1;
      numArray[curr_czNum] = {left:"", value:initValue, realValue:initValue, right:""};

      let trans = Math.floor(Math.random()*2);
      if(curr_czNum==czNum-1 && havetrans==0){ trans = 1; }
      if(trans==1){
        let transType = Math.floor(Math.random()*2)+1;
        if(transType==1){
          numArray[curr_czNum].left = "√";
          numArray[curr_czNum].value = Math.pow(Math.floor(Math.random()*9)+1,2);
          numArray[curr_czNum].realValue = Math.sqrt(numArray[curr_czNum].value);
        }else if(transType==2){
          numArray[curr_czNum].right = "^2";
          numArray[curr_czNum].realValue = Math.pow(numArray[curr_czNum].value,2);
        }
        havetrans = 1;
      }

      if(curr_charNum-1>=0 && charNumArray[curr_charNum-1]<=2 && charNumArray[curr_charNum]>2){
        numArray[0].left = numArray[0].left + "(";
        numArray[curr_czNum-1].right = numArray[curr_czNum-1].right + ")";
      }

      answer = Answer(answer, bornChar(charNumArray[curr_charNum]), numArray[curr_czNum].realValue);
      curr_charNum++;
      curr_czNum++;
    }

    let select = {
      A:answer+Math.floor(Math.random()*5)+1,
      B:answer-Math.floor(Math.random()*5)-1,
      C:answer+(Math.floor(Math.random()*5)+6),
      D:answer-(Math.floor(Math.random()*5)-6)
    };

    let tureSelect = Math.floor(Math.random()*4);

    if(tureSelect===0){ select.A = answer;}
    else if(tureSelect===1){ select.B = answer;}
    else if(tureSelect===2){ select.C = answer;}
    else if(tureSelect===3){ select.D = answer;}

    let qMain = "";
    qMain = qMain + numArray[0].left + numArray[0].value + numArray[0].right;
    for(let i=0;i<curr_czNum-1;i++){
      qMain = qMain + bornChar(charNumArray[i]);
      qMain = qMain + numArray[i+1].left + numArray[i+1].value + numArray[i+1].right;
    }

    let wholeQuestion = {Main:qMain, Option:select, trueAnswer:tureSelect};
    return wholeQuestion;
  }

  //生成一道高中题目
  function Born_One_High(){
    let czNum = Math.floor(Math.random()*4)+2;
    let curr_czNum = 0;
    let curr_charNum = 0;
    let numArray = new Array();
    let charNumArray = new Array();
    let answer = 0;

    let initValue01 = Math.floor(Math.random()*100)+1;
    numArray[curr_czNum] = {left:"", value:initValue01, realValue:initValue01, right:""};
    answer = numArray[0].value;
    curr_czNum++;

    let havetrans = 0;
    while(curr_czNum < czNum){
      charNumArray[curr_charNum] = Math.floor(Math.random()*4)+1;
      let initValue = Math.floor(Math.random()*100)+1;
      numArray[curr_czNum] = {left:"", value:initValue, realValue:initValue, right:""};

      let whatTransType = Math.floor(Math.random()*2);
      if(curr_czNum==czNum-1 && havetrans==0){ whatTransType=1; }
      if(whatTransType==0){
        let trans = Math.floor(Math.random()*2);
        if(trans==1){
          let transType = Math.floor(Math.random()*2)+1;
          if(transType==1){
            numArray[curr_czNum].left = "√";
            numArray[curr_czNum].value = Math.pow(Math.floor(Math.random()*9)+1,2);
            numArray[curr_czNum].realValue = Math.sqrt(numArray[curr_czNum].value);
          }else if(transType==2){
            numArray[curr_czNum].right = "^2";
            numArray[curr_czNum].realValue = Math.pow(numArray[curr_czNum].value,2);
          }
        }
      }else if(whatTransType==1){
        let trans = Math.floor(Math.random()*2);
        if(curr_czNum==czNum-1 && havetrans==0){ trans=1; }
        if(trans==1){
          let triAngle = TriangleFunction();
          numArray[curr_czNum].left = triAngle.type;
          numArray[curr_czNum].value = triAngle.value;
          numArray[curr_czNum].realValue = triAngle.realValue;
          havetrans++;
        }
      }

      if(curr_charNum-1>=0 && charNumArray[curr_charNum-1]<=2 && charNumArray[curr_charNum]>2){
        numArray[0].left = numArray[0].left + "(";
        numArray[curr_czNum-1].right = numArray[curr_czNum-1].right + ")";
      }

      answer = Answer(answer, bornChar(charNumArray[curr_charNum]), numArray[curr_czNum].realValue);
      curr_charNum++;
      curr_czNum++;
    }

    let select = {
      A:answer+Math.floor(Math.random()*5)+1,
      B:answer-Math.floor(Math.random()*5)-1,
      C:answer+(Math.floor(Math.random()*5)+6),
      D:answer-(Math.floor(Math.random()*5)-6)
    };

    let tureSelect = Math.floor(Math.random()*4);

    if(tureSelect==0){ select.A = answer;}
    else if(tureSelect==1){ select.B = answer;}
    else if(tureSelect==2){ select.C = answer;}
    else if(tureSelect==3){ select.D = answer;}

    let qMain = "";
    qMain = qMain + numArray[0].left + numArray[0].value + numArray[0].right;
    for(let i=0;i<curr_czNum-1;i++){
      qMain = qMain + bornChar(charNumArray[i]);
      qMain = qMain + numArray[i+1].left + numArray[i+1].value + numArray[i+1].right;
    }

    let wholeQuestion = {Main:qMain, Option:select, trueAnswer:tureSelect};
    return wholeQuestion;
  }

  //操作符数字转换
  function bornChar(charNum){
    let char;
    switch(charNum){
      case 1: char = "+"; break;
      case 2: char = "-"; break;
      case 3: char = "*"; break;
      case 4: char = "/"; break;
    }
    return char;
  }

  //答案计算
  function Answer(left, char, right){
    let sum;
    switch(char){
      case "+": sum = left + right; break;
      case "-": sum = left - right; break;
      case "*": sum = left * right; break;
      case "/": sum = left / right; break;
    }
    return sum;
  }

  //三角函数分类
  function TriangleFunction(num){
    let triArray = [{type:"sin", value:"(π/6)", realValue:0.5},
      {type:"sin", value:"(π/4)", realValue:1.414/2},
      {type:"sin", value:"(π/3)", realValue:1.7321/2},
      {type:"sin", value:"(π/2)", realValue:1},

      {type:"cos", value:"(π/6)", realValue:1.7321/2},
      {type:"cos", value:"(π/4)", realValue:1.414/2},
      {type:"cos", value:"(π/3)", realValue:0.5},
      {type:"cos", value:"(π)", realValue:-1},
      {type:"cos", value:"(2π)", realValue:1},

      {type:"tan", value:"(π/6)", realValue:1/1.7321},
      {type:"tan", value:"(π/4)", realValue:1},
      {type:"tan", value:"(π/3)", realValue:1.7321}];
    return triArray[Math.floor(Math.random()*12)];
  }

  //生成最终对象
  let finalArray = new Array();
  switch(clas){
    case 0:
      for(let i=0;i<num;i++){
        finalArray.push(Born_One_Primary());
      }
      break;
    case 1:
      for(let i=0;i<num;i++){
        finalArray.push(Born_One_Middle());
      }
      break;
    case 2:
      for(let i=0;i<num;i++){
        finalArray.push(Born_One_High());
      }
      break;
  }
  return finalArray;
}
