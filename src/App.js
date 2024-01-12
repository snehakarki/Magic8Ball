import'./assets/App.css'
import Initial from './components/initial';
import Result from './components/result';
import Confirm from './components//confirm';
import {useContext} from 'react';
import { MyContext } from './context';

const App = () =>{

  const context= useContext(MyContext);
  const handleComponent=()=>{
    const screen=0;
    if(screen==0) return <Initial/>
    if(screen==1) return <Confirm/>
    if(screen==2) return <Result/>
  }

  console.log(context.state);
  return (
    <div className="container">
      {handleComponent()}
    </div>
  );
}

export default App;
 