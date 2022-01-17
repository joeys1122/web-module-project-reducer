# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event handler dispatches the addOne action creator
* addOne changes the action type of the reducer to 'ADD_ONE'
* The reducer takes the 'total' from the initial state and adds one to it
* App.js receives the new total state from the reducer
* App.js sends the new total to the TotalDisplay component through props
* TotalDisplay shows the total plus 1.
