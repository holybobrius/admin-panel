import logo from './logo.svg';
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { BrowserRouter as Router, Route, Layout, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import dataServices from './services/dataServices';
import 'react-tabs/style/react-tabs.css'
import './App.css';
import { useEffect, useState } from 'react';
import PageView from './components/PageView/PageView';

function App() {
  
  const [data, setData] = useState([])

  useEffect(() => dataServices.fetchData().then(res => setData(res)), [])

  
  console.log(data.pages);

  return (
    <div className="App">
      <Router>
        <Navbar titles={data.pages} />
        <Routes>
          {data.pages ? data.pages.map(page => <Route path={`/${page.path}`} element={<PageView page={page} />}/>) : ''}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
