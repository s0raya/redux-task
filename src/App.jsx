import './App.css';
import Tasks from './components/Tasks.jsx'
import AddTaskInput from './components/AddTaskInput.jsx';

const App = () => {
  return (
    <>
      <AddTaskInput />
      <Tasks />
    </>
  );
};

export default App;
