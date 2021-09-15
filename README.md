# Track My Team(SQL DB Employee Tracker)

[![License: Mozilla 2.0](https://img.shields.io/badge/license-Mozilla%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)

  ## Description

  This application allows the user to create a finished HTML page for their employee roster. 

  ## Table of Contents

  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)

## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

## Installation

  Follow these steps for installing this project:

  - Clone the repository - Install the inquirer package using `npm install inquirer`.
  - On the command line, use mysql -u root -p to login to MySQL
  - Source both sql files
  - Finally run 'node index' to start prompt

  ## Usage

  After the installation steps you will use the command line to open the root directory of the project and run the app with `node index`. Follow the prompts to build the page with   data for each member of your team. Once complete the finished page will be written to the 'dist' folder.

  ## Contributing

  This project is not open for contributions at this time.

  ## Testing

  Use the following for testing this project:

  Install the jest module and run the command `npm run test`.

  ## License

  This project is licensed with [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).

  ## Video Walkthrough

  [Video Walk Through](https://youtu.be/h9REIs0p3CE)

  ## Questions

  If you have questions about this project please contact me at [ktodoran@gmail.com](mailto:ktodoran@gmail.com).
  
  More of my work can be found on GitHub at [ktodoran](https://github.com/ktodoran)
