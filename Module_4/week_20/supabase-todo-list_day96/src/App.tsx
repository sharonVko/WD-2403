
import { useEffect, useState } from 'react'
import './App.css'
import MyTodoList from './components/MyTodoList'
import AddTasks from './components/AddTasks'
import { supabase } from './utils/setupSupabase'

/* app tsx soll einmalig Daten aus unserer Datenbank holen */

export interface ITask{
  name: string,
  amount?: number
}

const App = () => {
 
  const [tasks, setTasks]= useState<ITask[]>([])
  async function getData() {
    const {data, error} = await supabase.from('todoTasks').select()
    if(error) console.log('fetching data failed', error);
    else setTasks(data)
    
  }
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      <MyTodoList tasks={tasks}/>
      <AddTasks setTasks={setTasks}/>
    </>
  )
}

export default App
