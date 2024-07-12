import './App.css';
import {functions} from '@utils/firebase';
import { httpsCallable } from 'firebase/functions';

export const App = () => {
  const helloWorld = httpsCallable(functions, 'HelloWorld');
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={
        () => {
          helloWorld().then((result) => {
            console.log('Result:', result);
          })
        }
      }></button>
    </div> 
  );
}

export default App;
