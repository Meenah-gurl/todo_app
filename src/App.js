import React from 'react'
import InputForm from './components/InputForm'
import Footer from './components/Footer';
import { Link, Route, Routes, } from 'react-router-dom';
import ParallaxEffect from './Pages/ParallaxEffect';


function App() {
  return (
    <><Routes>
        <Route path='/ParallaxEffect' element={<ParallaxEffect />} />
        {/* <Route exact path='/ParallexEffect' component={"ParallexEffect"}>
          <ParallaxEffect></ParallaxEffect>
        </Route> */}

    </Routes>
    <span className='py-5 px-3'>
        <Link to="/ParallaxEffect" className='cursor-pointer absolute top-0 right-0 text-white text-sm font-semibold hover:text-orange-600 duration-300'>Parallax Effect</Link>
    </span>
    {/* <div className='w-full min-h-screen bg-gradient-to-t from-sky-600 via-sky-400 to-sky-300 text-white px-4 flex justify-center items-center '> 
        <div className='w-[850px] bg-slate-900 p-10 flex flex-col gap-10'>
          <aside className='flex flex-col gap-4'>
            <h1 className='text-4xl font-semibold text-center'>Todo App</h1>
            <p className='text-center'>A simple todo app made with React and Tailwindcss</p>
          </aside>
          <InputForm />
          <Footer />
        </div>
    </div> */}
    </>
  );
}

export default App;
