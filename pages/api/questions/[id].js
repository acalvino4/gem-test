import { questions } from '../../../data/questions.json'

const getQuestionData = (id) => {
  try {
    return questions[id-1]
  } catch (err) {
    return null
  }
  
}  

export default (req, res) => {
  const { id } = req.query
  if (typeof id === 'string') {
    switch (req.method) {
      case 'GET': {
        const questionData = getQuestionData(id)
        if (questionData) {
          res.status(200)
          res.json(questionData)
        } else {
          res.status(404).end()
        }
        break
      }
      default: {
        res.status(405).end()
      }
    }
  } else {
    res.status(404).end()
  }
}
