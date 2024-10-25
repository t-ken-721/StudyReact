/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoMatch from './pages/NoMatch';
import AppLayout from './components/AppLayout';
import { theme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Routes>
        <Route path='/' element= {<AppLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/*' element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
