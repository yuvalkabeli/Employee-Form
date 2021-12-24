import React from 'react'
import Equipments from './Components/EquipmentList'
import Worker from './Components/Worker'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'fontsource-roboto';
import Send from './Components/Send';
import FullForm from './Components/FullForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullForm />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </Router>
  )
}
