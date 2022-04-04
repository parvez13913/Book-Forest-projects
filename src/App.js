import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Review from './component/Reviews/Reviews';
import Dashboard from './component/Dashboard/Dashboard';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/review' element = {<Review></Review>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
