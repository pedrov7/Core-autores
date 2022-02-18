import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductForm } from "./components/ProductForm";
import { Mycontext } from "./context/Mycontext";
import Detail from "./views/Detail";
import {Main} from "./views/Main";
import { ShowForm } from "./views/ShowForm";
import { Update } from "./views/Update";


function App() {


  return (

    <div className="d-flex justify-content-center">

      <BrowserRouter>

      <Mycontext>
        <Routes>

          <Route path='/' element = {<Main />}/>    
          <Route path='/:id' element = {<Detail/>}/>  
          <Route path='/edit/:id' element = {<Update/>}/>  
          <Route path='/new' element = {<ShowForm />}/>  
          

        </Routes>

      </Mycontext>

      </BrowserRouter>
    </div>
   

  );
}

export default App;
