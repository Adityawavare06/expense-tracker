
import './App.css';
import Display from './components/display';
import NAvbar from './components/navbar/NAvbar';
import { useContext } from 'react';
import { GlobalContext } from './content';

function App() {
  const {  userName, setUserName,value, setValue} = useContext(GlobalContext);

console.log(userName)
  return (
    <div className='content-between'>
      <NAvbar />
<Display/>

<div className=''>
<input className='border-spacing-1'
          name="search-by-username"
          type="text"
          placeholder="income"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}/>
<input  className='border-spacing-2'
          name="search-by-username"
          type="text"
          placeholder="expense"
          value={value}
          onChange={(event) => setValue(event.target.value)}/>
</div>
    </div>


  );
}

export default App;
