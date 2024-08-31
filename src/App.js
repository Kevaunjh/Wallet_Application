import './index.css';
import './App.css';
import React, { useState } from 'react';
import Main from './Main';
import MyAccount from './MyAccount';
import PersonalDetails from './AccountInfo/PersonalDetails';
import BankAccounts from './AccountInfo/BankAccounts';
import MyBookings from './AccountInfo/MyBookings';
import BiometricSetup from './AccountInfo/BiometricSetup';
import Fingerprint from './AccountInfo/BiometricSetups/Fingerprint';
import Pinlock from './AccountInfo/BiometricSetups/Pinlock';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WaterService from './AccountInfo/QuickServices/WaterService';
import PayWater from './AccountInfo/QuickServices/PayYourBill/PayWater';
import TopUpService from './AccountInfo/QuickServices/TopUpService';
import TopUpPayment from './AccountInfo/QuickServices/PayYourBill/TopUpPayment';
import GasService from './AccountInfo/QuickServices/GasService';  // Import GasService
import PayGas from './AccountInfo/QuickServices/PayYourBill/PayGas';  // Import PayGas
import LightService from './AccountInfo/QuickServices/LightService';  // Import LightService
import PayLight from './AccountInfo/QuickServices/PayYourBill/PayLight';  // Import PayLight
import InternetService from './AccountInfo/QuickServices/InternetService';  // Import InternetService
import PayInternet from './AccountInfo/QuickServices/PayYourBill/PayInternet';  // Import PayInternet
import GiftService from './AccountInfo/QuickServices/GiftService';  // Import GiftService
import PayGift from './AccountInfo/QuickServices/PayYourBill/PayGift';  // Import PayGift
import TransactionResponse from './AccountInfo/QuickServices/PayYourBill/TransactionResponse';
import Notifications from './Notification';
import RecentTransactions from './RecentTransactions';
import Points from './Points';
import Signup from './AccountManagement';
import SetupSuccess from './AccountInfo/BiometricSetups/Pinlockconfirmation/SetupSuccess';
import AddCard from './AccountInfo/AddCard';
import Cheques from './Cheques';
import Coupons from './Coupons';
import PointHistory from './PointHistory';
import { initializeApp } from 'firebase/app';
import DepositSuccessful from './DepositSuccessful';
import Giftcards from './Giftcards';
import Introduction from './Introduction';
import AccountManagement from './AccountManagement';
import LogoAnimation from './LogoAnimation';


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
          <Route path="/QuickServices/PayYourBill/TopUpPayment" element={<TopUpPayment toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/TopUpService" element={<TopUpService toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/GasService" element={<GasService toggleComponent={toggleComponent} />} /> 
          <Route path="/QuickServices/PayYourBill/PayGas" element={<PayGas toggleComponent={toggleComponent} />} /> 
          <Route path="/QuickServices/LightService" element={<LightService toggleComponent={toggleComponent} />} />  
          <Route path="/QuickServices/PayYourBill/PayLight" element={<PayLight toggleComponent={toggleComponent} />} />  
          <Route path="/QuickServices/InternetService" element={<InternetService toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/PayYourBill/PayInternet" element={<PayInternet toggleComponent={toggleComponent} />} />
          <Route path="/QuickServices/GiftService" element={<GiftService toggleComponent={toggleComponent} />} /> 
          <Route path="/QuickServices/PayYourBill/PayGift" element={<PayGift toggleComponent={toggleComponent} />} /> 
          <Route path="/Notification" element={<Notifications toggleComponent={toggleComponent} />} /> 
          <Route path="/Points" element={<Points toggleComponent={toggleComponent} />} />
          <Route path='/AccountManagement' element={<AccountManagement toggleComponent={toggleComponent} />} />
          <Route path='/' element={<Introduction toggleComponent={toggleComponent} /> } />
          <Route path="/AccountInfo/BiometricSetups/Pinlockconfirmation/SetupSuccess" element={<SetupSuccess toggleComponent={toggleComponent} />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
