import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Dropdown from './component/dropdown/Dropdown';
import List from './component/list/List';
import defaultValueResult from './json/defaultAspect.json'
import tempValueResult from './json/tempAspect.json'

function App() {
  const [aspect,setAspect] = useState(defaultValueResult);
  const [dataJson, setDataJson] = useState(null)

  const handleDataJson = () => {
    let dummy = "";
    console.log('inside',aspect)
    for(let i = 0 ; i < aspect.length ; i++){
      dummy += Object.keys(aspect[i]).toString()+": {"
      let temp = Object.values(aspect[i])
      dummy += JSON.stringify(temp,null, '\t').replace(/[{}""\[\]']+/g,'')
      dummy += "}\n"
    }
    setDataJson(dummy)
    console.log("first\n",dummy)
    
    // let data = JSON.stringify(aspect)
    // setDataJson(data)
  }
  console.log('hehe',dataJson)
  return (
    <div className='container'>
      <div className='body'>
        <List name="Mahasiswa 1" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 2" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 4" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 5" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 6" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 7" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 8" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 9" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
        <List name="Mahasiswa 10" setAspect={setAspect} aspect={aspect} setDataJson={setDataJson}/>
      </div>
      <div className='footer'>
        <button onClick={handleDataJson}>Simpan</button>
      </div>
      <div className='jsonContainer'>
        <pre>{dataJson}</pre>
      </div>
    </div>
  );
}

export default App;
