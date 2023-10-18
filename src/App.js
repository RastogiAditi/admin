
import './App.css';
import MonthWiseChart from './components/MonthWiseChart';
import DashBoard from './components/DashBoard';
import DashboardTab from './components/DashboardTab';
import EarningTab from './components/EarningTab';
import Customers from './components/Customers';
import ProductSellTab from './components/ProductSellTab';

function App() {
  return (
    <div>
     <DashboardTab/>   
     <DashBoard/>
     <EarningTab/>
     <MonthWiseChart/>
     <Customers/>
     <ProductSellTab/>
     </div>
   
     
  
  );
}

export default App;
