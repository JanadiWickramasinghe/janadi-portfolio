import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Globe2, Code2, Mail } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { links } from '../data/siteData'

const nav=[['Home','/'],['About','/#about'],['Work','/work'],['Skills','/#skills'],['Contact','/#contact']]
const scrollToContact=()=>window.setTimeout(()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth',block:'start'}),120)
const scrollHome=()=>window.setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),60)
export function Layout({children}:{children:React.ReactNode}){
 const [open,setOpen]=useState(false); const loc=useLocation(); const {scrollYProgress}=useScroll(); const scaleX=useSpring(scrollYProgress,{stiffness:140,damping:26})
 useEffect(()=>{setOpen(false);const target=loc.hash.slice(1);const timer=window.setTimeout(()=>{if(target){document.getElementById(target)?.scrollIntoView({behavior:'smooth',block:'start'})}else{window.scrollTo({top:0,behavior:'auto'})}},0);return()=>window.clearTimeout(timer)},[loc.pathname,loc.hash])
 return <><motion.div className="progress" style={{scaleX}}/><header className="nav"><Link to="/" className="logo" aria-label="Janadi Wickramasinghe home" onClick={scrollHome}>JW<span>.</span></Link><nav className={open?'navlinks open':'navlinks'} aria-label="Main navigation">{nav.map(([n,u])=><Link key={n} to={n==='Contact'?'/':u} onClick={()=>{setOpen(false);if(n==='Contact')scrollToContact();if(n==='Home')scrollHome()}}>{n}</Link>)}</nav><Link className="nav-cta" to="/" onClick={scrollToContact}>Let’s talk <ArrowUpRight size={16}/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></header><main>{children}</main><Footer/></>
}
export function Footer(){return <footer><div><Link to="/" className="logo" onClick={scrollHome}>JW<span>.</span></Link><h3>Janadi Wickramasinghe</h3><p>Interactive Media Designer<br/>Creating brands, digital experiences, and visual stories.</p></div><div className="footer-links"><Link to="/" onClick={scrollHome}>Home</Link><Link to="/#about">About</Link><Link to="/work">Work</Link><Link to="/" onClick={scrollToContact}>Contact</Link></div><div className="social-row"><a href={links.linkedin} aria-label="LinkedIn"><Globe2/></a><a href={links.github} aria-label="GitHub"><Code2/></a><a href={`mailto:${links.email}`} aria-label="Email"><Mail/></a></div><small>© {new Date().getFullYear()} Janadi Wickramasinghe. Designed and developed with creativity and purpose.</small></footer>}
