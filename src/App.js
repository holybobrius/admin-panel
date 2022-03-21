import { BrowserRouter as Router, Route, Layout, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar/Navbar';
import { fetchData } from './services/dataServices';
import 'react-tabs/style/react-tabs.css'
import './App.css';
import { useEffect, useState } from 'react';
import PageView from './components/PageView/PageView';
import NewPageView from './components/NewPageView/NewPageView'
import { initPages } from './reducers/pagesReducer'

function App() {
  
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  const pages = useSelector(state => state)

  useEffect(() => {
    fetchData().then(res => dispatch(initPages(res.pages)))
    console.log('pages', pages)
  }, [dispatch])

  const handlePageUpdate = page => {
    setData(data.pages.map(n => n.path === page.path ? page : n))
    
  }

  return (
    <div className="App">
      <Router basename='/admin'>
        <Navbar />
        <Routes>
          <Route path='/' element={<div>hi</div>} />
          <Route path='/:path' element={<PageView handlePageUpdate={handlePageUpdate} />} />
          <Route path='/new' element={<NewPageView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
