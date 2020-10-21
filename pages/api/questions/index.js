import { questions } from '../../../data/questions.json'

// returns the number of questions in the quiz
export default (req, res) => {
  switch (req.method) {
    case 'GET': {
      res.status(200)
      res.json({numQuestions: questions.length})
      break
    }
    default: {
      res.status(405).end()
    }
  }
}
