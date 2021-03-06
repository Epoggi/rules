# Personal skill level evaluation via Reaktor pre-assignment
### Finished
Assignment in short, create a web front for Magic The Gathering rules.txt more details at the end of this readme document.

[]() [Heroku link](https://mgtrules.herokuapp.com/)

## To-Do
- Improve search speed
- Improve search accuracy (Have exact matches on top)
- Add hyperlinks into rules

## Finished 13.08.2021
- Build Heroku Procfile
- gitignore source file
- Deploy to Heroku successful
- Added selected option to chapter list
- Battled with gitignore

## progress 12.08.2021
- Search box with filter.includes
- Little styling

![image](https://user-images.githubusercontent.com/11327084/129183937-aa2643fb-9872-46da-abf2-a7914f62ef22.png)

## progress 10.08.2021
co-programming with Sérgio
- Scrapped react window and learned a lot about component usage
- Rules list changes according to selected chapter
- Major code remodeling

## progress 09.08.2021

![image](https://user-images.githubusercontent.com/11327084/128690461-d4702540-750e-4f48-9633-24b58e3b7708.png)

### Co-Programming
[]() [Sérgio Isidoro (Github link)](https://github.com/sergioisidoro)
 is a great friend and a brilliant teacher, with him I've learned a lot and I'm priviledged to have tutoring from him, thank you very much.

He helped me understand:
- React component coding
- Regex
- Tools like Regex101

### Project created with
- React & Material-ui

### Learnings
- From school I've learned various coding basics, including react and more precisely using componnents and for example taking user input in a controlled way
- Through this project I've learned: Regex, Tools, Debugging, Clean code, Component coding, Heroku Procfile.. 

Thank you very much.


# Assignment details

Assignment Source: https://www.reaktor.com/junior-dev-assignment-2021/

File Source: https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt

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
