import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import ShowOne from './components/ShowOne';
import AllRecipes from './components/AllRecipes';
import List from './components/List';
import UpdateRecipe from './components/UpdateRecipe';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/list/:type" element = {<List/>}/>
          <Route path="/allRecipes" element = {<AllRecipes/>}/>
          <Route path = "/showOne/:id" element = {<ShowOne/>}/>
          <Route path = "/updateRecipe/:id" element = {<UpdateRecipe/>}/>
          <Route path="/form" element = {<Form/>}/>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
