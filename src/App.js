import'./assets/App.css'
import Initial from './components/initial';
import Result from './components/result';
import Confirm from './components//confirm';

const App = () =>{

  const handleComponent=()=>{
    const screen=0;
    if(screen==0) return <Initial/>
    if(screen==1) return <Confirm/>
    if(screen==2) return <Result/>
  }
  return (
    <div className="container">
      {handleComponent()}
    </div>
  );
}

export default App;
 