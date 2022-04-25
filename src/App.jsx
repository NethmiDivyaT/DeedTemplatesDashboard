import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import DeedTemplate from './pages/DeedTemplate/deedtemplate'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import DeedForm from './pages/DeedTemplate/DeedOfTransfer/deedOfTransferForm'
import ScanDeed from './pages/ScanDeeds/scandeed'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="deeds" element={<DeedTemplate />} />
                    <Route path="scandeed" element={<ScanDeed />} />
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />
                    <Route path="deedform" element={<DeedForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
