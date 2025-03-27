// src/App.js
import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import Quiz from './Quiz';

function App() {
  return (
    <div>
      <UserForm />
      <UserList />
      <Quiz />
    </div>
  );
}

export default App;
