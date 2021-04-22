import React, { useState } from 'react'
import Input from './components/Input'
import Output from './components/Output'

const App = () => {
  const [value,setvalue]=useState("");
  const [isEdit,setisEdit]=useState({edit:false,editId:null});
  return (
    <div>
      <Input value={value} setvalue={setvalue} isEdit={isEdit} setisEdit={setisEdit}/>
      <Output value={value} setvalue={setvalue} isEdit={isEdit} setisEdit={setisEdit}/>
    </div>
  )
}

export default App
