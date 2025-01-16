// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import D from './task/d'


// // function App() {
// //   // const [count, setCount] = useState(0)

// //   return (
// //     <>

// //     {/* <div class="a">

// //       <h2>Registration Form</h2>
// //       <form action="">
// //       <label htmlFor="">First name </label>
// //       <br />
// //       <input type="text" />
// //       <br />
// //       <label htmlFor="">Last name </label><br />
// //       <input type="text" />
// //       <br />
// //       <label htmlFor="">Age </label> <br />
// //       <input type="text" />
// //       <br />
// //       <label htmlFor="">Year of Passing </label> <br />
// //       <input type="text" />
// //       <br />
// //       <label htmlFor="">DOB </label> <br />
// //       <input type="text" />
// //       <br />
// //       <label htmlFor="">Gender </label><br />
// //       <select name="" id="">
// //         <option value="">Male</option>
// //         <option value="">Female</option>
// //       </select>

// //       <br />
// //       <label htmlFor="">Degree </label> <br />
// //       <select name="" id="">
// //         <option value="">MA</option>
// //         <option value="">M.Com</option>
// //         <option value="">MBA</option>
// //         <option value="">MCA</option>
// //         <option value="">M.Sc</option>
// //         </select>
// //       <br />
// //       <label htmlFor="">Language known</label> 
// //       <br />
// //         <input type="checkbox" /> Tamil
// //         <br />
// //         <input type="checkbox" /> English 
// //         <br />
// //         <input type="checkbox" /> Hindi 
// //         <br />
// //         <input type="checkbox" /> More than 3


// // <br />
// // <button id='a'>Submit</button>









// //         </form>


// //         </div> */}
// //         </>

// //     </>
// //   )

// // }


// // export default App

// import React, { createContext, useState } from 'react'
// import Ameen1 from './component/ameen'
// import NewTask from './component/usestates/app'
// import Rend from './component/class/conditional rendering'
// import ListRender from './component/class/listrendering'
// import ConRen from './component/class/cRenderTask'
// import Usefx from './component/class/useEffectClass'
// import Vebbox from '../vebbox/components/vebbox'

import Home from '../vebbox/components/home'
import VebboxNavbar from '../vebbox/components/Navbar'
import Services from '../vebbox/components/services'
// import ClassComponent from './component/classComponent Class/classComponent'
// import Context from './component/useContext/useContext'
// import VebboxNavbar from '../vebbox/components/vebbox'
import RouterNew from './component/router/router'
import Context1 from './context'
import DashboardLayoutBasic from './CollegeDashBoard/demoMui'
import CollegeDashboard from './CollegeDashBoard/demoMui'
import Dashboard from './CollegeDashBoard/demoMui'




import Home1 from './home1'
import MiniDrawer from './CollegeDashBoard/demoMui'
import About from '../vebbox/components/about'
import { Route, Routes } from 'react-router-dom'
import Management from './CollegeDashBoard/Management/Management'
import BrandingSignInPage from './CollegeDashBoard/StudentsLogin/Login'
import HomePage from './CollegeDashBoard/collegeHome/CollegeHome'
import BoxBasic from './CollegeDashBoard/collegeHome/CollegeHome'
import SelectActionCard from './CollegeDashBoard/Examination/Examination'
import Apps from './component/useNavigateHook/navigate'
import SimpleGrow from './CollegeDashBoard/floatingBar/transitions/animate'











function App() {

  return (
    // <Context1 >
    //   <Home1 />
    // </Context1>
    <div>

      <div>
      {/* <DashboardLayoutBasic/> */}
      <MiniDrawer/>
      {/* <SimpleGrow/> */}
    {/* <Apps/> */}
      </div>
    
      <Routes>
    
    
    <Route path='/Students Login' element={<BrandingSignInPage/>}/>

</Routes>



      {/* <VebboxNavbar/>   */}


{/* <VebboxNavbar/> */}
{/* <RouterNew/> */}
</div>
  )

  {/* <Ameen1/> */ }
  {/* <NewTask/> */ }
  {/* <Rend/> */ }
  {/* <ListRender/> */ }
  {/* <ConRen/> */ }
  {/* <a/> */ }
  {/* <Usefx/> */ }
  
  {/* <ClassComponent/> */ }

  // <Context/>


  {/* </> */ }

}

export default App



