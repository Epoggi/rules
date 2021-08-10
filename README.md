# Personal skill level evaluation via Reaktor pre-assignment
In short: Create a web front for Magic The Gathering rules.txt
Source: https://www.reaktor.com/junior-dev-assignment-2021/

## Goals
1. Have a web frontend
2. Include a Table of Contents with hyperlinks to chapters containing game rules. For instance, “100. General” is a chapter
3. Display the selected chapter beside the Table of Contents, containing all rules in that chapter. For instance, “100.2a” is a rule
4. Include a search box for filtering the rules displayed on the page, so that you can, for instance, type “commander” and find all rules that mention the word “commander”

## Requirements
1. The application must be deployed on the Internet for our inspection. Please, provide us with the link when submitting your solution.
2. Put the source code on Github or similar, preferably as a public repository. Please, provide us with the link when submitting your solution.
3. You should ignore the Contents, Glossary, and any other sections in the input file, except for the actual numbered rules.
4. You don’t need to be a card game fanatic, or even know the rules of the game to succeed. What you need is to figure out the format of the file, parse it programmatically and represent it in the described manner on the web.
5. We appreciate solutions that have a clear structure and demonstrate your abilities to write clean code that has a good separation of concerns.
6. We also appreciate solutions that have a good UX. However, we don’t expect you to come up with a stunning visual appearance. We’re more interested in usability and performance.

## Intellectual Property Rights
1. Do not use any trademarks, logos, or other copyrighted content in your application. Only display the game rules in a useful form. You may refer to the Fan Content Policy document.
2. Do not include the game rules file into an open-source code repository, as it’s not public domain. Instead, fetch and process it dynamically in your application.
3. We’ve interpreted the Wizards of the Coast Fan Content Policy to allow making interactive applications based on the rules file, and numerous existing implementations have been around for years. Still, if you feel uncomfortable publishing this, you may require a password (sent to us) in your application to prevent public use.

### If you’re keen on developing your solution further (beyond our assignment instructions), some bonus features might include:

1. Create hyperlinks automatically between rules where applicable. For instance, when a text of a rule contains the string 809.5 and there exists a rule 809.5, the text “809.5” should be shown as a hyperlink to rule 809.5
2. Load the input data rules.txt dynamically and provide a UI for specifying an alternative file by URL

## Underconstrution
1. Hyperlinks to scroll content list via table of contents list
2. Search box for keywords
3. VariableSizeList: To have the item size of rules list change according to rules information length

## Current progress 09.08.2021

![image](https://user-images.githubusercontent.com/11327084/128690461-d4702540-750e-4f48-9633-24b58e3b7708.png)

## Used components
FixedSizeList / VariableSizeList: https://github.com/bvaughn/react-window
others: Material-ui: Grid and other list elements.








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
