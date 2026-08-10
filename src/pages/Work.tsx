import { useState } from 'react'
import { Eyebrow, ProjectCard, Reveal } from '../components/UI'
import { projects } from '../data/siteData'
const filters=['All','Branding','UX/UI','Digital Marketing','Social Media','Web and Interactive']
export default function Work(){const [active,setActive]=useState('All'); const shown=active==='All'?projects:projects.filter(p=>p.filter.includes(active));return <section className="page section"><Reveal><Eyebrow>Project archive</Eyebrow><h1>Work that connects<br/><em>ideas with people.</em></h1><p className="page-lead">Explore selected projects across identity, experience design, digital campaigns, and interactive media.</p></Reveal><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button onClick={()=>setActive(f)} className={active===f?'active':''} key={f}>{f}</button>)}</div><div className="project-grid">{shown.map(p=><Reveal key={p.slug}><ProjectCard p={p}/></Reveal>)}</div></section>}
