const questions = [
  {
    question: 'How old am I?',
    options: [13, 2, 26, 4, 91],
    correctChoice: 2
  },
  {
    question: 'What is my favorite sport?',
    options: ['tennis', 'soccer', 'ultimate', 'basketball'],
    correctChoice: 1
  }
]

export const getQuestion2 = async (questionId) => {
  fetch(`/api/questions/${questionId}`).then((response) => {
    return response.json
  })
}

export const getQuestion = (questionId) => {
  try {
    const questionData = questions[questionId-1]
    return questionData
  } catch (err) {
    return null
  }
}

export const getNumQuestions = () => questions.length
