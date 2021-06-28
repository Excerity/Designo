import React from 'react';
import './MapImages.css';
import MapImagesDesc from './MapImagesDesc';
import CanadaImg from '../../images/image-map-canada.png';
import AustraliaImg from '../../images/image-map-australia.png';
import UkImg from '../../images/image-map-uk.png';

function MapImages() {
    return (
        <div className='Locations-Page-Container'>
            <div className='Locations-Container'> 
            <div className='Locations-Image-Container' id='MapImageCanada'>
            <img className='Map-Image' src={CanadaImg} alt=""/>
            </div>
            <MapImagesDesc
            Country='Canada' 
            Office='Designo Central Office' 
            Address1='3886 Wellington Street' 
            Address2=' Toronto, Ontario M9C 3J5' 
            Phone= 'P : +1 253-863-8967'
            Mail='M : contact@designo.co' />
            </div>

            <div className='Locations-Container'>
            <div className='Locations-Image-Container' id='MapImageAustralia'>
            <img className='Map-Image' src={AustraliaImg} alt=""/>
            </div>
            <MapImagesDesc
            Country='Australia' 
            Office='Designo AU Office' 
            Address1=' 19 Balonne Street' 
            Address2=' New South Wales 2443' 
            Phone= 'P : (02) 6720 9092'
            Mail='M : contact@designo.au' />
            </div>

            <div className='Locations-Container'>
            <div className='Locations-Image-Container' id='MapImageUK'>
            <img className='Map-Image' src={UkImg} alt=""/>
            </div>
            <MapImagesDesc 
            Country='United Kingdom' 
            Office='Designo UK Office' 
            Address1='13 Colorado Way' 
            Address2='Rhyd-y-fro SA8 9GA' 
            Phone= 'P : 078 3115 1400'
            Mail='M : contact@designo.uk' />
          </div>
        </div>
    )
}

export default MapImages
