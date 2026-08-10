import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/work" element={<Work/>}/><Route path="/work/:slug" element={<CaseStudy/>}/></Routes></Layout>}
export default App
