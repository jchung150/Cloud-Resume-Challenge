<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#technology-used">Technology used</a>      
    </li>
    <li><a href="#how-did-we-use-ai">How did we use AI</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#file-contents-of-folder">File Contents of folder</a></li>
    <li><a href="#learn-more">Learn More</a></li>
    <li><a href="#references">References</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#licence">Licence</a></li>
  </ol>
</details>
<br />
<div align="center">
  <h3 align="center">Cloud-Resume-Challenge</h3>
  <p align="center">
    This is my static online resume utilizing Next.js and Tailwind CSS, hosted securely on AWS.
    <br />
    <br />
    <a href="https://2800-202310-bby-19.vercel.app/">See My Resume</a>
    ·
    <a href="/">Report Bug</a>
  </p>
</div>

## Screenshots

<img width="200" alt="Screenshot" src="https://github.com/jchung7v/mywebsite2/assets/111412548/fc16971c-602a-4484-9664-6eb011b322e7">
<img width="200" alt="Screenshot 2023-08-12 at 4 46 45 PM" src="https://github.com/jchung7v/mywebsite2/assets/111412548/58294fec-3032-46ab-976b-6b8df090532b">
<img width="200" alt="Screenshot 2023-08-12 at 4 47 19 PM" src="https://github.com/jchung7v/mywebsite2/assets/111412548/49668800-300a-4e4b-8cc8-824764419448">


## High Level Design of AWS Services

<img width="690" alt="Screenshot 2023-08-12 at 4 45 03 PM" src="https://github.com/jchung7v/mywebsite2/assets/111412548/1ca2acb9-7c05-470c-9caa-784c83830ff9">

![Next JS](https://img.shields.io/badge/Next^13.3.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss^3.3.2-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Python](https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=AWS&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=AWS&logoColor=white)
![VScode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## How did I pull this off?
1. AI played a pivotal role in the creation of our app, particularly in the coding phase. We employed OpenAI's Codex model, also known as Co-Pilot, which enhanced our development efficiency and ensured the application of best practices. This model provided real-time code suggestions, assisted in debugging, and served as an invaluable tool for problem-solving, thereby expediting the coding process and bolstering the overall quality of the app.
2. In addition to aiding in the app's creation, AI was integral in preparing the data needed for our app. We incorporated OpenAI's Ada model into a Python-based data processing pipeline for dataset fine-tuning. The Ada model helped clean and organize the dataset by identifying and correcting inaccuracies, eliminating duplicates, and filling in missing values. This meticulous dataset preparation improved the data quality, tailoring it to our application's needs and contributing to the app's overall performance.
3. Our app harnesses the power of AI for several functions. One of its key applications is in text completion, where we utilize OpenAI's text-davinci-003 and 002 model. As users embark on their creative writing journey, the AI model suggests potential progressions for their story, aiding them in their creativity. Another critical function of AI in our app is in genre detection. The app analyses user-generated text and assigns it to a predefined genre. This capability not only assists in organizing the content but also paves the way for personalized recommendations.
4. Despite these advancements, we encountered a few challenges along the way, primarily dealing with the variability and ambiguity of human language. Our genre detection feature, given the subjectivity and context-dependence of language, found it challenging to always correctly categorize the genre. However, we took these limitations as opportunities for improvement. We diversified our training datasets and used user feedback for model fine-tuning. We also allowed users to manually correct the AI-detected genre, and their corrections were fed back into the model for future learning. This iterative process helped the model learn from its mistakes and adapt to user inputs, thereby continually improving over time.

## File Contents of folder

```
📦 2800-202310BBY19
├─ .gitignore
├─ README.md
├─ app
│  ├─ (auth)
│  │  ├─ layout.jsx
│  │  ├─ signin
│  │  │  └─ page.jsx
│  │  └─ signout
│  │     └─ page.jsx
│  ├─ (site)
│  │  ├─ createMainThread
│  │  │  └─ page.jsx
│  │  ├─ layout.jsx
│  │  ├─ loading.jsx
│  │  ├─ profile
│  │  │  ├─ layout.jsx
│  │  │  └─ page.jsx
│  │  └─ threads
│  │     ├─ [threadId]
│  │     │  ├─ layout.jsx
│  │     │  ├─ loading.jsx
│  │     │  ├─ mainThread.jsx
│  │     │  └─ page.jsx
│  │     ├─ layout.jsx
│  │     ├─ loading.jsx
│  │     └─ page.jsx
│  ├─ components
│  │  ├─ EasterEggTrigger
│  │  │  ├─ EasterEggBBY19Trigger.jsx
│  │  │  ├─ EasterEggCatTrigger.jsx
│  │  │  └─ EasterEggPop.jsx
│  │  ├─ auth
│  │  │  ├─ GoogleSignInButton.jsx
│  │  │  └─ SignInButton.jsx
│  │  ├─ box
│  │  │  ├─ ConnectorLine.jsx
│  │  │  ├─ LReadTextBox.jsx
│  │  │  ├─ RReadTextBox.jsx
│  │  │  └─ mainTreadBox.jsx
│  │  ├─ button
│  │  │  ├─ Button.jsx
│  │  │  ├─ LikesCompleteButton.jsx
│  │  │  └─ VotesCompleteButton.jsx
│  │  ├─ card
│  │  │  ├─ SimpleProfileCard.jsx
│  │  │  ├─ StoryCard.jsx
│  │  │  ├─ profileCardInfo.jsx
│  │  │  └─ profilepage.jsx
│  │  ├─ form
│  │  │  └─ TextField.jsx
│  │  ├─ modal
│  │  │  └─ Modal.jsx
│  │  └─ ui
│  │     ├─ Contributors.jsx
│  │     └─ button.jsx
│  ├─ favicon.ico
│  ├─ footer.jsx
│  ├─ globals.css
│  ├─ head.jsx
│  ├─ header.jsx
│  ├─ layout.jsx
│  ├─ newUser
│  │  └─ page.jsx
│  ├─ page.jsx
│  └─ provider.jsx
├─ jsconfig.json
├─ lib
│  └─ prisma
│     ├─ branchThread.js
│     ├─ index.js
│     ├─ mainThreads.js
│     ├─ threads.js
│     └─ users.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  └─ api
│     ├─ auth
│     │  └─ [...nextauth].js
│     ├─ profile
│     │  └─ index.js
│     ├─ threads
│     │  ├─ [threadId]
│     │  │  ├─ index.js
│     │  │  ├─ like
│     │  │  │  └─ index.js
│     │  │  └─ unlike
│     │  │     └─ index.js
│     │  ├─ branchThread
│     │  │  └─ index.js
│     │  ├─ index.js
│     │  ├─ mainThread
│     │  │  ├─ index.js
│     │  │  ├─ unvote
│     │  │  │  └─ index.js
│     │  │  └─ vote
│     │  │     └─ index.js
│     │  └─ mergeThread
│     │     └─ index.js
│     ├─ user
│     │  └─ [userId]
│     │     └─ index.js
│     └─ users
│        ├─ [userEmail]
│        │  └─ index.js
│        └─ index.js
├─ postcss.config.js
├─ prisma
│  └─ schema.prisma
├─ public
│  ├─ CollaborateWithOthers2.gif
│  ├─ CreateYourOwnStory2.gif
│  ├─ MergeStory2.gif
│  ├─ SAM_Logo_Final.png
│  ├─ bookCover
│  │  ├─ comedy.png
│  │  ├─ crime.png
│  │  ├─ fantasy.png
│  │  ├─ history.png
│  │  ├─ horror.png
│  │  ├─ psychology.png
│  │  ├─ romance.png
│  │  ├─ science-fiction.png
│  │  ├─ sports.png
│  │  ├─ thriller.png
│  │  └─ travel.png
│  ├─ catjamled.gif
│  ├─ fireworks.gif
│  ├─ fullHeart.svg
│  ├─ heart.svg
│  ├─ horror.png
│  ├─ image01.jpg
│  ├─ next.svg
│  ├─ nineteenbby.gif
│  ├─ nyancat.png
│  ├─ plus.svg
│  ├─ refresh.svg
│  ├─ samLogo3.png
│  ├─ sammember.png
│  ├─ sifi.png
│  ├─ typeWriter.jpg
│  ├─ vercel.svg
│  ├─ vote.png
│  └─ voted.png
└─ tailwind.config.js
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## References

[NextJS](https://nextjs.org/)
[Prisma](https://www.prisma.io/)
[Tailwind css](https://tailwindcss.com/)
[NextAuth](https://next-auth.js.org/)
[OpenAI](https://openai.com/)
[Vercel](https://vercel.com/docs)
[MongoDB](https://www.mongodb.com/)

## Credits

<img src="https://issp.bcit.ca/BCIT_logo.png"  width="100" height="100" />

## Licence
[MIT Licence](https://www.mit.edu/~amini/LICENSE.md)
