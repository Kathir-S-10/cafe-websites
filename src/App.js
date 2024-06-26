import './App.css';
import Header from './Components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import OrderPage from './Components/OrderPage';
import ContactPage from './Components/ContactPage';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Order' element={<OrderPage/>}></Route>
      <Route path='/Contact' element={<ContactPage/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
