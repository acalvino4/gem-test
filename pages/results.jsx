import { useRouter } from 'next/router'

export default function Results() {
  const router = useRouter()
  const { query: { numCorrect, numQuestions } } = router

  return (
    <div>
      <h1>Congrats on completing the quiz!</h1>
      <h3>You got {numCorrect} questions right out of {numQuestions}!</h3>
    </div>
  )
}
