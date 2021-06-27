import React from 'react'
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import '../DesktopGridLayout.css';
import NavMenu from '../components/Nav/NavMenu';
import webDesignProjects from '../utils/webDesignProjects';
import DesignPageHeader from '../components/DesignProjects/DesignPageHeader';
import DesignProjects from '../components/DesignProjects/DesignProjects';
import IndivDesignImage from '../components/HomePage/IndivDesignImage';

function WebDesign() {
    return (
        <div>
         <NavMenu />
      <DesignPageHeader title='Web Design' Para1='We build websites that serve as powerful marketing' Para2='tools and bring memorable brand experiences.' />
      <section>
        <div className='Design-Projects-Container'>
        {webDesignProjects.map((project) => {
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
       <IndivDesignImage  id='App' link='/AppDesign#top' title='App Design'/>
       <IndivDesignImage id='Graphic' link='/GraphicDesign#top' title='Graphic Design'/>
       </div>

      <AboveFooter />
      <Footer />  
        </div>
    )
}

export default WebDesign
