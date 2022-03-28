# Find zip code app in TDD + React + TypeScript

Let's create again my old app to find a city in France by its zip code.
But this type, I will do it in TDD. 
It means, I will begin with unit tests. Tests I think that are mandatory for the future feature working.

In this markdown file, I will write my journey. 

## Github repository
I create a repôsitory on github (I would prefer gitlab, but my old findazipcode app is on this github)

## Configure my EDI

## Create branches
I won't work on "main". I will only use it to merge features when they will be operational
A branch "develop", it s a "monorepo". The branch to test the app before send it to "main" (in production)
Others branches, one by feature.

## Set react
https://fr.reactjs.org/docs/create-a-new-react-app.html
```
npx create-react-app mon-app
cd mon-app
npm start
```
Clean the react code in order to begin

## set Typescript
Install typescript
https://www.typescriptlang.org/download
https://create-react-app.dev/docs/adding-typescript/#getting-started-with-typescript-and-react
https://www.premieroctet.com/blog/migration-typescript


## create a "develop" branch to push work from features branches

## First feature would be the call to the api
In a "services" file, I create an api-zipcode-provider. I think it's the first step because, if the tests runs when the feature is done. I could be sure that the api works. And I can go on with the zip code submit. (next feature)
But first, i create a new branch "api-zipcode-provider"


