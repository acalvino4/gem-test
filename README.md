# Problem Description

Please implement a quiz-taking system.

* The system should be a full-stack web application
  * It should have a backend API to get the questions
  * And a frontend UI to answer them
* The quiz can handle one or more questions
* The quiz only has multiple-choice questions with one right answer each
* The app should tell the user how he or she did at the end of the quiz

# My Strategy

I decided to use nextjs because it provides both a front end framework (react) and a backend framework (an express-like api builder) and has a hosting solution that integrates well with it (vercel).

I created 3 pages:
* a landing page from which the user can start the quiz
* a page that iterates through the quiz questions
* a page that summarizes the results of the quiz

The api is very simple, consisting of a 2 rest-like endpoints, one for getting the number of questions, and one for getting each individual question.
It accesses the data from a json file, which I used because it seemed to be the simplest way to solve the use case of this app. Setting up a database and a whole relational schema just seemed unnecessary, especially since it would involve setting up and hosting a database server as well - I figured sticking to the simplest solution that solves the problem is the best! Of course one could argue that planning for extensibility is important, and it is, but for this case...I'm pretty certain we aren't planning on it.
To add questions, just add entries to `/data/questions.json`!

The quiz page is the most interesting part of the front-end - it uses the react useState hook to keep track of the current question and how many are answered correctly, and when the last question is submitted, it forwards info on the number of correct and total questions to the results page where it is displayed.
It uses the swr library to make calls that fetch questions from the api and display a placeholder while waiting for them to return.

Because the specifications don't require that the result be sent to or saved on the server, I assumed that this setup (if extended to a real use) would be for a quiz that is only for an end-user's benefit; that cheating is not super important to prevent. Hence, checking for correctness is done on the client side, and a technical user could cheat by opening devtools and finding data on the correct answer.

# Ideas for improvement

* The UI obviously could be improved, but was obviously not a focus of this test
* The checking of answers could be done server-side if important to prevent cheating
* A 'previous question' button could be included to allow users to edit previous answers; this would require a redesign of much of the quiz page.
* An error page for bad requests (non-existed quiz question id's) would be good, though if the user is just clicking through the interface, this shouldn't come up (but of course this doesn't mean we shouldn't prepare for it)


# Running locally

* Download source from github: `placeholder`
* cd into project folder
* run `npm install`
* run `npm run start`
* visit http://localhost:3000 in your browser

# View online on Vercel
`Project link`





# Boilerplate generated from `create-next-app` below...

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
