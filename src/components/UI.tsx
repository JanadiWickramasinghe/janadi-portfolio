import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/siteData'

export function Reveal({children,className=''}:{children:React.ReactNode,className?:string}){return <motion.div className={className} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.65,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
export function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><span/> {children}</div>}
export function ProjectCard({p}:{p:Project}){const isDesignCollection=p.slug==='social-media-design';return <article className="project-card"><Link to={`/work/${p.slug}`} className="project-media" aria-label={isDesignCollection?`View ${p.name} designs`:`View ${p.name} case study`}><img src={p.image} alt={`${p.name} project cover`} loading="lazy"/><span className="project-no">{p.number}</span>{p.label&&<span className="project-label">{p.label}</span>}</Link><div className="project-info"><p className="category">{p.category}</p><h3>{p.name}</h3><p>{p.description}</p><div className="tools">{p.tools.map(t=><span key={t}>{t}</span>)}</div><div className="project-actions"><Link to={`/work/${p.slug}`} className="text-link">{isDesignCollection?'View designs':'View case study'} <ArrowUpRight size={17}/></Link>{p.links.map(l=><a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="mini-link">{l.label}</a>)}</div></div></article>}
