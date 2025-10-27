import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  return (
    <>
      <UserCard name="Himanshu Chauhan" desc="This is Description 1"/>
      <UserCard name="Yash Rajput" desc="This is Description 2"/>
      <UserCard name="Jonathan" desc="This is Description 3"/>
      <p>These are the cards created by props by passinng values dynamically</p>
    </>
  );
}

export default App
