'use client'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import TodoList from './tasks/ToDoList';
import Navbar from './Navbar';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
