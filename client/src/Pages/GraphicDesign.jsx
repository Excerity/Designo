import React from 'react'
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import MidPageDesign from '../MidPageDesign';
import MidPageDescGraphicDesign from '../components/GraphicDesign/MidPageDescGraphicDesign';
import NavMenu from '../components/Nav/NavMenu';
import DesignPageHeader from '../components/DesignProjects/DesignPageHeader';
import graphicDesignProjects from '../utils/graphicDesignProjects';
import DesignProjects from '../components/DesignProjects/DesignProjects';
import IndivDesignImage from '../components/HomePage/IndivDesignImage';


function GraphicDesign() {
    return (
        <div>
          <NavMenu />
      <DesignPageHeader title='Graphic Design' Para1='We deliver eye-catching branding materials that' Para2='are tailored to meet your business objectives.'  />
      
      <section>
        <div className='Design-Projects-Container'>
        {graphicDesignProjects.map((project) => {
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
      <IndivDesignImage id='App' link='/AppDesign#top' title='App Design'/>
      <IndivDesignImage id='Web' link='/WebDesign#top' title='Web Design'/>
      </div>
     
      <AboveFooter />
      <Footer />   
        </div>
    )
}

export default GraphicDesign