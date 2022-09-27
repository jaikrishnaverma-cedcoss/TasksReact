
import './App.css';
import './BaseUI.css';
import Main from './component/Main';
import Task1 from './component/Task1';
import Task2 from './component/Task2';
import Task3 from './component/Task3';
import Task4 from './component/Task4';
import Task5 from './component/Task5';
import Task6 from './component/Task6';
import Task7 from './component/Task7';
import Task8 from './component/Task8';

function App() {
  return (
    <div className="App">
      <h3>Q1. Create a Button that counts no of clicks and displays on button itself</h3>
  <Task1/>
  <h3>Q2. Create a counter with increment, decrement and reset functionality.</h3>
  <Task2 />
  <h3>Q3. Create a count down clock that starts on a button click with current time as start and decrements second by second.</h3>
  <Task3 />
  <h3>Q4. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of useContext hook to perform this.</h3>
    <Task4 />
    <h3>Q5. Make the currency converter you made using context,  now with useContext Hook</h3>
    <Task5 />
    <h3>Q6. Make a functional component Parent that has two buttons 'increment 1' and 'increment 2'. Both on click, increment count by one. Along with the value of count, it also displays Odd or Even as per the value of count. Now add a loop inside the event handler of increment 1. This loop loops over a big number like 2000000000 just to introduce delay. Now, if you click on first button the delay in display is obvious but on clicking button 2 it is still there but it should not be there. So find a solution for this.</h3>
   <Task6 />
  <h3>Q7. a. Create the app as shown using useMemo hook. On changing the number inside the textbox, the number and its next two successors must be printed. On click of Toggle theme, the theme must change.        b. Create the same app using useCallback hook.</h3>
   <Task7 />
   <h3>Q7.b.</h3>
   <Task8 />
   <h3>Q8. Create a ToDo list based on template provided.     Conditions: add/delete/update todo mark complete todo list completed and pending todos in different group as in template once use click edit todo, value should populate in top todo form and ADD button should change to UPDATE button.</h3>
    <Main />
    </div>
  );
}

export default App;
