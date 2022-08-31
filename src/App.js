import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div>
          {/* {
            (loggedInUser.email)
              ? console.log('App: login')
              : console.log('App: not log in')
          } */}

        </div>

        <Routes>

          <Route path="/appointment" element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>}>
          </Route>

          <Route path="/dashboard/appointment" element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>}>
          </Route>



          {/* <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>

            <Route exact path="/dashboard" element={
              <DashboardHome></DashboardHome>}>
            </Route>

            <Route path={`/dashboard/payment/:appointmentId`} element={
              <Payment></Payment>}>
            </Route>


            <Route path={`/dashboard/makeAdmin`} element={
              <AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
            </Route>


            <Route path={`/dashboard/addDoctor`} element={
              <AdminRoute>
                <AddDoctor></AddDoctor>
              </AdminRoute>}>
            </Route>
          </Route> */}



          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </UserContext.Provider>
    </div >
  );
}

export default App;
