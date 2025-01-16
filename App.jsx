
import Home from '../vebbox/components/home'
import VebboxNavbar from '../vebbox/components/Navbar'
import Services from '../vebbox/components/services'
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
    <>
       <div>
   
      <MiniDrawer/>
      
      </div>
    
<Routes>
    
    <Route path='/Students Login' element={<BrandingSignInPage/>}/>

</Routes>

  </>


export default App



