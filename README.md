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
1. ~~Hyperlinks to scroll content list via table of contents list~~
2. Search box for keywords
3. Have code work through Heroku
4. ~~VariableSizeList: To have the item size of rules list change according to rules information length~~ Obsolete

## progress 10.08.2021
co-programming with []() [Sérgio Isidoro (Github link)](https://github.com/sergioisidoro)

- Scrapped react window and learned a lot about component usage
- Rules list changes according to selected chapter

## progress 09.08.2021

![image](https://user-images.githubusercontent.com/11327084/128690461-d4702540-750e-4f48-9633-24b58e3b7708.png)

## Used components
FixedSizeList / VariableSizeList: https://github.com/bvaughn/react-window
others: Material-ui: Grid and other list elements.

### Co-Programming
Sérgio is a great friend and a brilliant teacher, with him I've learned a lot and I'm priviledged to have tutoring from him, thank you very much.

He helped me understand:
- React component coding
- Regex
- Tools like Regex101
