

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [data,setData]=useState([])
  const [useData,setUseData]=useState([])
  const [newDataShows,setNewDataShow]=useState([])
 const [times,setTimes]=useState([])
  

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  
 const handleUseData=data=>{
  const isExist=useData.find(datum=>datum.id==data.id)
  // const newData=[...useData,data]
  // use data show-------
  // console.log(newData)
  if(!isExist){
    const newData=[...useData,data]
    setUseData(newData)
    // console.log(useData)
  }
  else{
    alert('do not disturb again')
  }

 }

 const handleRemoveData=removeData=>{
   const remaingData=useData.filter(removingDatum=>removingDatum.id!=removeData.id)
   setUseData(remaingData)
 }

const handleSetNewData=(newData)=>{
    setNewDataShow([...newDataShows,newData])
}
 
const totalExpendTime=(time)=>{
   const newTime=[...times,time]

   setTimes(newTime)
   
  
}




  return (
    <>
      
      <h1>Vite + React</h1>
     
     <h3>hellow</h3>

     <h1>total data : {data.length}</h1>
     {
      data.map(datum=><div key={datum.id}>
        <h1>{datum.title}</h1>
        <button onClick={()=>{handleUseData(datum)}}>want to cook</button>
      </div>)
    
     }

      <p>here is use use component</p> 

      {
        useData.map(useDatum=><div key={useDatum.id}>
          <h1>new data : {useDatum.title}</h1>
          <button onClick={()=>{handleRemoveData(useDatum);handleSetNewData(useDatum);totalExpendTime(useDatum)}}>confirm data </button>
          </div>)
      }
     <p>new confirm data</p>
      
      {
        newDataShows.map(newDataShow=><div key={newDataShow}>
          <h1>{newDataShow.title}</h1>
        </div>
      )}
     <h1>set new time</h1>
      
    </>
  )
}

export default App
