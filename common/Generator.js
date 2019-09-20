export function generatePaper(amount,rank) {
  let question = [];

  for (let i = 0; i < amount; i++){
    question.push({
      index: i,
      statement: '题目水电费是阿萨德as发放收到富商大贾水电费gas访达大沙发沙发上',
      answer: i%4
    })
  }

  return question;
}
