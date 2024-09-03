import './index.css';
import './App.css';
import React, { useState } from 'react';
import Main from './Pages/Main';
import MyAccount from './Pages/AccountInfo/MyAccount';
import PersonalDetails from './Pages/AccountInfo/AccountPages/PersonalDetails';
import BankAccounts from './Pages/AccountInfo/AccountPages/BankAccounts';
import MyBookings from './Pages/AccountInfo/AccountPages/MyBookings';
import BiometricSetup from './Pages/AccountInfo/BiometricSetups/BiometricSetup';
import Fingerprint from './Pages/AccountInfo/BiometricSetups/Setups/Fingerprint';
import Pinlock from './Pages/AccountInfo/BiometricSetups/Setups/Pinlock';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WaterService from './Pages/AccountInfo/QuickServices/WaterService';
import PayWater from './Pages/AccountInfo/QuickServices/PayYourBill/PayWater';
import TopUpService from './Pages/AccountInfo/QuickServices/TopUpService';
import TopUpPayment from './Pages/AccountInfo/QuickServices/PayYourBill/TopUpPayment';
import GasService from './Pages/AccountInfo/QuickServices/GasService'; 
import PayGas from './Pages/AccountInfo/QuickServices/PayYourBill/PayGas';  
import LightService from './Pages/AccountInfo/QuickServices/LightService';  
import PayLight from './Pages/AccountInfo/QuickServices/PayYourBill/PayLight';  
import InternetService from './Pages/AccountInfo/QuickServices/InternetService'; 
import PayInternet from './Pages/AccountInfo/QuickServices/PayYourBill/PayInternet';
import GiftService from './Pages/AccountInfo/QuickServices/GiftService'; 
import PayGift from './Pages/AccountInfo/QuickServices/PayYourBill/PayGift';
import TransactionResponse from './Pages/AccountInfo/QuickServices/PayYourBill/TransactionResponse';
import Notifications from './Pages/Notification&Transactions/Notification';
import RecentTransactions from './Pages/Notification&Transactions/RecentTransactions';
import Points from './Pages/Points/Points';
import SetupSuccess from './Pages/AccountInfo/BiometricSetups/Setups/Pinlockconfirmation/SetupSuccess';
import AddCard from './Pages/AccountInfo/AccountPages/Addcard/AddCard';
import Cheques from './Pages/Points/Cheques';
import Coupons from './Pages/Points/Coupons';
import PointHistory from './Pages/Points/PointHistory';
import { initializeApp } from 'firebase/app';
import DepositSuccessful from './Pages/Points/DepositSuccessful';
import Giftcards from './Pages/Points/Giftcards';
import Introduction from './Pages/AccountConfirmation/Introduction';
import AccountManagement from './Pages/AccountConfirmation/AccountManagement';
import LogoAnimation from './Pages/LogoAnimation';
import Loadmoney from './Pages/LoadingMoney/Loadmoney';
import Loadto from './Pages/LoadingMoney/Loadto';
import LoadConfirm from './Pages/LoadingMoney/LoadConfirm';
import LoadSuccess from './Pages/LoadingMoney/LoadSuccess';
import Loadfrom from './Pages/LoadingMoney/Loadfrom';

function App() {

  const [currentComponent, setCurrentComponent] = useState('Signup');

  const toggleComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/AccountInfo/Addcard" element={<AddCard toggleComponent={toggleComponent} /> } />
          <Route path="/Cheques" element={<Cheques toggleComponent={toggleComponent}/>} />
          <Route path="/Loadmoney" element={<Loadmoney toggleComponent={toggleComponent}/>} />
          <Route path="/Giftcards" element={<Giftcards toggleComponent={toggleComponent}/>} />
          <Route path="/Depositcallback" element={<DepositSuccessful toggleComponent={toggleComponent}/>} />
          <Route path="/PointHistory" element={<PointHistory toggleComponent={toggleComponent}/>} />
          <Route path="/Main" element={<Main toggleComponent={toggleComponent} />} />
          <Route path="/Loading" element={<LogoAnimation toggleComponent={toggleComponent} />} />
          <Route path="/Coupons" element={<Coupons toggleComponent={toggleComponent} />} />
          <Route path="/AccountInfo/QuickServices/PayYourBill/TransactionResponse" element={<TransactionResponse toggleComponent={toggleComponent} />} />
          <Route path="/MyAccount" element={<MyAccount toggleComponent={toggleComponent} />} />
          <Route path="/Accountinfo/PersonalDetails" element={<PersonalDetails toggleComponent={toggleComponent} />} />
          <Route path="/RecentTransactions" element={<RecentTransactions toggleComponent={toggleComponent} />} />
          <Route path="/Accountinfo/BankAccounts" element={<BankAccounts toggleComponent={toggleComponent} />} />
          <Route path="/Accountinfo/MyBookings" element={<MyBookings toggleComponent={toggleComponent} />} />
          <Route path="/Accountinfo/BiometricSetup" element={<BiometricSetup toggleComponent={toggleComponent} />} />
          <Route path="/Accountinfo/BiometricSetups/Fingerprint" element={<Fingerprint toggleComponent={toggleComponent} />} />
          <Route path="/Accountinfo/BiometricSetups/Pinlock" element={<Pinlock toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/WaterService" element={<WaterService toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/PayYourBill/PayWater" element={<PayWater toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/PayYourBill/PayInternet" element={<PayInternet toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/PayYourBill/TopUpPayment" element={<TopUpPayment toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/TopUpService" element={<TopUpService toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/GasService" element={<GasService toggleComponent={toggleComponent} />} /> 
          <Route path="/QuickServices/PayYourBill/PayGas" element={<PayGas toggleComponent={toggleComponent} />} /> 
          <Route path="/QuickServices/LightService" element={<LightService toggleComponent={toggleComponent} />} />  
          <Route path="/QuickServices/PayYourBill/PayLight" element={<PayLight toggleComponent={toggleComponent} />} />  
          <Route path="/QuickServices/InternetService" element={<InternetService toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/GiftService" element={<GiftService toggleComponent={toggleComponent} />} /> 
          <Route path="/QuickServices/PayYourBill/PayGift" element={<PayGift toggleComponent={toggleComponent} />} /> 
          <Route path="/Notification" element={<Notifications toggleComponent={toggleComponent} />} /> 
          <Route path="/Points" element={<Points toggleComponent={toggleComponent} />} />
          <Route path='/AccountManagement' element={<AccountManagement toggleComponent={toggleComponent} />} />
          <Route path='/' element={<Introduction toggleComponent={toggleComponent} /> } />
          <Route path='/Loadto' element={<Loadto toggleComponent={toggleComponent} /> } />
          <Route path='/Loadfrom' element={<Loadfrom toggleComponent={toggleComponent} /> } />
          <Route path='/LoadConfirm' element={<LoadConfirm toggleComponent={toggleComponent} /> } />
          <Route path='/LoadCallback' element={<LoadSuccess toggleComponent={toggleComponent} /> } />
          <Route path="/AccountInfo/BiometricSetups/Pinlockconfirmation/SetupSuccess" element={<SetupSuccess toggleComponent={toggleComponent} />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
