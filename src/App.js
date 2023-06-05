import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css';
import AllRestaurants from './Components/AllRestaurants/AllRestaurants';
import ViewRestaurant from './Components/ViewRestaurant';
import { Route,Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        
      </header>

      <section>
      {/* <h1 className='text-center'><i className='fa-solid fa-home'></i>Restaurant App</h1> */}

       <Routes>
        <Route path='/' element={<AllRestaurants/>}/>
        <Route path='/view/:id' element={<ViewRestaurant/>}/>
       </Routes>



      {/* <AllRestaurants/> comment this not needeD */}
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
