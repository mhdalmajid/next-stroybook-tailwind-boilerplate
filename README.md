This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


## Note
There is an issue with Storybook and Tailwind v2.0 compatibility that gives this error:
To solve this we need to upgrade our Storybook packages with the following command:
```bash
npx sb upgrade --prerelease
```



## todo:
- pick test libraries cypress - jest - https://testing-library.com/ - ??
- stylelintrc
-


## structure

app
The app directory is where our application actually lives. I like the approach of having the application files, which are not dedicated to the framework bundled in a specific directory.


app/api
This folder contains all code we need to access the APIs of our application. Personally, I like to have one folder for each REST API controller. Each folder then contains the functions for the API calls as well as the tests.

app/api/RestClient.ts
The RestClient contains basic functions like get, post, delete, and so on. Those functions are then used by the APIs. I like to use axios for this one.


api/components
The components directory contains all your elements, modules, templates, and layouts. I will explain each of these under a separate title. Some of you may prefer the Atomic Design by Brad Frost which is fine as well. In my opinion, the Atomic Design Pattern is sometimes a little bit confusing whether a component is a molecule or organism.


api/components/elements
This directory contains all the basic building blocks for your app. For example a button or a headline component.


api/components/layouts
Create all your components here which are more than a basic building block. This could be a header or a footer component. Most likely those modules are built out of multiple


api/components/pages or templates
In the templates directory, you should place all your page templates which are then called from your Next.js specific pages. You can find an example of this pattern in the Repository.