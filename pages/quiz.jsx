import { useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr' // state-while-revalidate

export default function Quiz() {
  const [questionId, setQuestionId] = useState(1)
  const [numCorrect, setNumCorrect] = useState(0)
  const [currentChoice, updateCurrentChoice] = useState(null)
  // if used repeatedly across a larger app, I would define this 'fetcher' function externally and import it here
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: numQuestionsObj, error: error1 } = useSWR(`/api/questions`, fetcher) // could refactor to only call this the first time page loads
  const { data: questionData, error: error2 } = useSWR(`/api/questions/${questionId}`, fetcher)
  if (error1 || error2) {
    return (<div>No such question.</div>)
  }
  if (!questionData || !numQuestionsObj) {
    return (<div>Loading...</div>)
  }
  const { numQuestions } = numQuestionsObj
  const { question, options, correctChoice } = questionData

  const optionChangeHandler = (event) => {
    const { value } = event.target
    updateCurrentChoice(Number(value))
  }
  const nextHandler = (event) => {
    event.preventDefault()
    // the current vs. correct comparison was happening here, but I broke it apart into both sides of the if/else
    // because the updated value of numCorrect was not being sent in router.push when I called setNumCorrect here
    if (questionId === numQuestions) { //move on to summary page
      const finalCorrect = (currentChoice === correctChoice) ? numCorrect+1 : numCorrect 
      const router = useRouter()
      router.push({
        pathname: '/results',
        query: {
          numCorrect: finalCorrect, 
          numQuestions
        },
      })
    } else { // move on to next question
      if (currentChoice === correctChoice) {
        setNumCorrect(numCorrect+1)
      }
      setQuestionId(questionId+1)
    }
    return false
  }
  return (
    <div>
      <h1>Question {questionId}</h1>
      <h3>{question}</h3>
      <form onSubmit={nextHandler}>
        {options.map((option, index) => (
          <div key={index}>
            <input
              id={'option' + index}
              type='radio'
              name='option'
              value={index}
              onChange={optionChangeHandler}
            />
            <label htmlFor={'option' + index}>{option}</label>
            <br />
          </div>
        ))}
        <br />
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}
