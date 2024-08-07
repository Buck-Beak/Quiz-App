# Tech Haven

Tech Haven is a React quiz application that generates questions dynamically using Google Generative API.allows users to select a topic and answer multiple-choice
questions on that topic.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Navbar](#navbar)
  - [Signup](#signup)
  - [Login](#login)
  - [TopicList](#topiclist)
  - [TopicDetails](#topicdetails)
  - [Home](#home)
  - [QuestionList](#questionlist)
  - [FetchQuestions](#fetchquestions)
  - [UseFetch](#usefetch)

## Installation

1. Clone the repository:

```sh
git clone <repository_url>
cd note-maker
```

2. Install the dependencies:

```sh
npm install
```

3. Install JSON Server globally:

```sh
npm install -g json-server
```

4. Start JSON Server:

```sh
json-server --watch public/notes.json --port 8000
```

5. To use the Gemini API in your own application, you need to install the GoogleGenerativeAI package for Node.js

```sh
npm install @google/generative-ai
```

6. Start the React application:

```sh
npm start
```

## Usage

1. Open the app in your browser.
2. Register or log in to your account.
3. Select a topic from the home screen.
4. Answer the questions generated for the selected topic and hit submit.
5. Displays the correct answer after each submit.

## Components

### Navbar

Displays the navigation bar which contains app name and login link.

### Signup

Handles user registration by taking the user's name, username, and password and storing them in the user database.

### Login

Handles user authentication by verifying the entered username and password against the user database.

### TopicList

Contains the list of topics that users can choose from which on clicked will redirect to a new page that displays questions.

### TopicDetails

Receives the prompt to generate questions from TopicList and passes it to the QuestionList component for question generation.

### Home

Serves as the landing page, displaying the TopicList component.

### QuestionList

Fetches and displays questions based on the selected topic using the provided prompt.

### FetchQuestions

Generates questions based on the prompt provided in TopicList component using Gemini API key.

### UseFetch

This custom hook fetches the user data from the given url for login functionality.

