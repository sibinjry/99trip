import Flight from './Flight';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Train from "./Train";
import Utility from "./Utility";
import Tour from "./Tour";
import Home from "./Home";
import Visa from "./Visa";
import Utilitymobile from './Utilitymobile';
import Dth from './Dth';
import Laneline from './Laneline';
import Datacard from './Datacard';
import Broadband from './Broadband';
import Utilityinsurance from './Utilityinsurance';
import Utilitygas from './Utilitygas';
import Utilityelectricity from './Utilityelectricity';
import Utilitywater from './Utilitywater';
import Paymentsucess from './Paymentsuccess';
import Fastag from './Fastag';
import Municipal from './Utilitymunicipal';
import Education from './Utilityeducation';
import Loan from './Utilityloan';
import Utilityhouse from './Utilityhouse';
import Cable from './Utilitycable';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Flight' Component={Flight} />
          <Route path='/Home' Component={Home} />
          <Route path='/Train' Component={Train} />
          <Route path='/Tour' Component={Tour} />
          <Route path='/Visa' Component={Visa} />
          <Route path='/Utility' Component={Utility} />
          <Route path='/Utilitymobile' Component={Utilitymobile} />
          <Route path='/Dth' Component={Dth} />
          <Route path='/Laneline' Component={Laneline} />
          <Route path='/Datacard' Component={Datacard} />
          <Route path='/Broadband' Component={Broadband} />
          <Route path='/Utilityinsurance' Component={Utilityinsurance}/>
          <Route path='/Utilitygas' Component={Utilitygas}/>
          <Route path='/Electricity' Component={Utilityelectricity}/>
          <Route path='/Water' Component={Utilitywater}/>
          <Route path='/Paymentsuccess' Component={Paymentsucess}/>
          <Route path='/Fastag' Component={Fastag}/>
          <Route path='/Municipal' Component={Municipal} />
          <Route path='/Education' Component={Education}/>
          <Route path='/Loan' Component={Loan}/>
          <Route path='/Utilityhouse' Component={Utilityhouse}/>
          <Route path='/Cable' Component={Cable}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
