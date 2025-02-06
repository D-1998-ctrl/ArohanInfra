import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Masters from './Masters/Masters';
import CustomerMaster from './Masters/CustomerMaster';
import SupplierMaster from './Masters/SupplierMaster';
import ProductMaster from './Masters/ProductMaster';
import MaterialMaster from './Masters/MaterialMaster';
import AccountMaster from './Masters/AccountMaster';
import LoginPage from './LogIn-SignUp/Login';
import Purchase from './Transaction/PurchaseEntry';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Navigate to="/login" />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path="/" element={<Sidebar />}>


          <Route path="/customermaster" element={<CustomerMaster />} />
          <Route path="/suppliermaster" element={<SupplierMaster />} />
          <Route path="/productmaster" element={<ProductMaster />} />
          <Route path="/materialmaster" element={<MaterialMaster />} />
          <Route path="/accountmaster" element={<AccountMaster />} />
          <Route path="/Purchase" element={<Purchase/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
