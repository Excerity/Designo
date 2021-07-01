import React from 'react'
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import'../TabletDesc.css'
import '../DesktopGridLayout.css'
import NavMenu from '../components/Nav/NavMenu';
import DesignPageHeader from '../components/DesignProjects/DesignPageHeader';
import DesignProjects from '../components/DesignProjects/DesignProjects';
import appDesignProjects from '../utils/appDesignProjects';
import IndivDesignImage from '../components/HomePage/IndivDesignImage';


function AppDesign() {
    return (
        <div>
     <NavMenu />
      <DesignPageHeader title='App Design' Para1='Our mobile designs bring intuitive digital solutions' Para2='to your customers right at their fingertips.' />
      <section>
        <div className='Design-Projects-Container'>
        {appDesignProjects.map((project) => {
              return (
                <DesignProjects 
                  key={project.id}
                  img={project.img}
                  title={project.title}
                  description={project.description}
                />
              );
            })}
        </div>
      </section>

      <div className='Indiv-Container'>
      <IndivDesignImage id='Web' link='/WebDesign#top' title='Web Design'/>
      <IndivDesignImage id='Graphic' link='/GraphicDesign#top' title='Graphic Design'/>    
      </div>
     
      <AboveFooter />
      <Footer /> 
        </div>
    )
}

export default AppDesign
    