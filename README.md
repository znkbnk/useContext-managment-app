This project demonstrates how to
use the useContext hook to share
state and functions across different
components without the need for
prop drilling.

Step 1: Setup

-  Create a new React project using
create-react-app or your preferred method.
-  Set up the basic project structure
with a main App component.

Step 2: Create Context

-  Create a new file called TaskContext.js
to define the task-related context.
-  Import React and create a new context
using React.createContext().
-  In the TaskContext file, create a
TaskProvider component. This component
will wrap around the rest of your app
and provide the task-related state and
functions to its child components.
-  Set up the initial state for tasks in
the TaskProvider component using useState.
For example, initialize tasks as an empty array.
-  Implement functions to add and delete
tasks using useState and setState.
-  Create a value object to provide the
state and functions to the consuming components.

Step 3: Update App Component

-  Import the TaskProvider component
from TaskContext.js.
-  Wrap your entire App component with
the TaskProvider component to make the
task-related state and functions
available to all child components.

Step 4: Create TaskForm Component

-  Create a new component called 
TaskForm.js.
-  Import React and the TaskContext
from TaskContext.js.
-  Create a functional component called
TaskForm and export it as the default.
-  In the TaskForm component, render
a form with an input field and
a submit button.
-  Implement an onChange event handler
on the input field to update the
component state.
-  Implement an onSubmit event handler
on the form to add a new task using
the addTask function from the TaskContext.

Step 5: Create TaskList Component

Create a new component called TaskList.js.
-  Import React and the TaskContext
from TaskContext.js.
-  Create a functional component called
TaskList and export it as the default.
-  In the TaskList component, render an
unordered list (<ul>) to display the tasks.
-  Use the tasks array from the TaskContext
to iterate over the tasks and render
each task as a list item (<li>).
-  Add a delete button next to each task
item and implement an onClick event
handler to delete the corresponding
task using the deleteTask function
from the TaskContext.

Step 6: Render TaskForm and TaskList
in App Component

-  Import the TaskForm and TaskList 
components into the App component.
-  Render the TaskForm and TaskList
components within the App component.

Step 7: Test the App

-  Start the development server and
open your app in the browser.
-  Test adding tasks using the
TaskForm component.
-  Test deleting tasks using the delete
button in the TaskList component.

