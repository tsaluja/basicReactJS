# Setup and create component
## Setup:
  1.	Create a new folder for application
  2.	Open the terminal on the folder location
  3.	Run: npx create-react-app appName
  4.	Once the command is complete with the setup, run
      cd appName
      npm install redux react-redux –save
      npm start
  5.	This will now open the application in the browser
      http://localhost:3000/

## Including Bootstrap:
  1.	Open index.html under public folder
  2.	Goto to bootstrap site add copy the code to include bootstrap css.
  3.	Paste the code inside index.html
  4.	You can delete the src folder to clean up the code

## Creating Components:
  1.	Create new src folder
  2.	Under this folder, create index.js file
      import React from 'react';
      import ReactDOM from 'react-dom';

      ReactDOM.render(
          <div>Reminder Pro</div>, document.getElementById('root')
      )
  3.	Create a folder “components” inside “src”
  4.	Create new file “App.jsx” inside “components”
      
      import React, {Component} from 'react';

      class App extends Component {
          render(){
              return(
                  //HTML will come here
              )
          }
      }

      export default App;

## Calling component in HTML:
  1.	Open index.js under public folder
  2.	Import App Component created here
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from ‘./components/App’;
  3.	Replace the existing code:
      
      ReactDOM.render(
          <div>Reminder Pro</div>, document.getElementById('root')
      )
      With:
      ReactDOM.render(
          <App/>, document.getElementById('root')
      )
      
> Here, App is the class we created under App.jsx file.


