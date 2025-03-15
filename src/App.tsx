import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Master from './pages/Master'
import Projects from './pages/Projects.tsx'
import { Contact } from './pages/Contact.tsx'
import { Tools } from './pages/Tools.tsx'
import { Experience } from './pages/Experience.tsx'
import { MevivuExp } from './pages/Experiece/MevivuExp.tsx'
import NotFound from './pages/NotFound.tsx'
import MasterProject from './pages/Projects/Master.tsx'
import ProjectList from './pages/Projects/Index.tsx'
import ProjectDetail from './pages/Projects/Detail.tsx'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Master />}>
                    <Route index element={<Home />} />
                    <Route path={'/projects'} element={<Projects />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/tools'} element={<Tools />} />
                    <Route path={'/experience'} element={<Experience />} />
                    <Route
                        path={'/experience/mevivu'}
                        element={<MevivuExp />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/projects-list/" element={<MasterProject />}>
                    <Route index element={<ProjectList />} />
                    <Route path={'view/:id'} element={<ProjectDetail />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
