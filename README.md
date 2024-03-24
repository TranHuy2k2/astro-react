# Astro + React Example

This project is an example of using the tech stack Astro + React + Prismic + Tailwind + ArkUI. Build a basic web page with a playground for headless ArkUI components.

## Prerequisites

Make sure you are using `Node` version > 18. The project used `Node` version 20

## Quick start

1.  Clone this repo using `git clone https://github.com/TranHuy2k2/astro-react.git`
2.  Move to the directory: `cd astro-react`.<br />
3.  Run `yarn install` in order to install dependencies.<br />
4.  Copy the `.env.example` to `.env` and add in the API KEY to the .env file.

## Use your own Prismic Dashboard Repository

If you want to use your own Prismic Dashboard Repository then:

1. On your repo `Prismic Dashboard`, create the custom type by using the json files in folder `customtypes`.
2. Create the document with the name:
   - Homepage: using the `Homepage` custom type.
   - Playground: using the `Playground` custom type.
3. Change the custom type token in `.env`
4. Change the repository name to your own in the file `src/prismic.ts`

## Start development

```
yarn dev
```

## Simple build for production

```
yarn build
```

## Preview production build

```
yarn preview
```
