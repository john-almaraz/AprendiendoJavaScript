import './App.css';
import logo from './images/logo.png'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='container-logo'>
        <img
          alt='logo-app'
          src={logo}
          className='logo'
        />
      </div>
      <div className='container-task-list'>  
        <h1>Task List</h1>   
        <TaskList/>        
      </div>
    </div>
  );
}

export default App;
