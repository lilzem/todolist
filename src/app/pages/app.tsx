// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import ToDoList from '../components/ToDoList';


export function App() {
  return (
    <div className='container'>
      <ToDoList />
    </div>
  );
}

export default App;
