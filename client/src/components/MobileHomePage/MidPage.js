import React from 'react'
import './HomeMidPage.css'

function MidPage({ Passionate, Friendly, Resourceful, Circle }) {
    return (
        <div className='MidPage'>

            <div className='MidPage__Container'>

            <div className="HomeCircle">
    <img src={Circle} alt=""/>

</div>

<img className='MidPage__Picture' src={Passionate} alt=""/>
        <div className='MidPage__Paragraph'>
        <h2 className='MidPage__Picture__Title' >Passionate</h2>
        <p>Each project starts with an in-depth brand</p>
         <p>research to ensure we only create products that</p>
         <p> serve a purpose. We merge art, design, and</p>
        <p>technology into exciting new solutions.</p>
        </div>
        <div className='MidPage__Paragraph22'>
        <h2 className='MidPage__Picture__Title'  >Passionate</h2>
        <p>Each project starts with an in-depth brand research to ensure we</p>
        <p> only create products that serve a purpose. We merge art,</p>
        <p>design, and technology into exciting new solutions.</p>
        </div>
            </div>
     

        <div className='MidPage__Container'>
        <div className="HomeCircle">
    <img src={Circle}alt=""/>

</div>

<img className='MidPage__Picture' src={Resourceful} alt=""/>

            <div className='MidPage__Paragraph'>
            <h2 className='MidPage__Picture__Title' >Resourceful</h2>
              <p>Everything that we do has a strategic purpose.</p>
              <p>We use an agile approach in all of our projects</p>
              <p>and value customer collaboration. It guarantees</p>
              <p>superior results that fulfill our clients needs.</p>
            </div>

            <div className='MidPage__Paragraph22'>
            <h2 className='MidPage__Picture__Title'  >Resourceful</h2>
              <p>Everything that we do has a strategic purpose. We use an agile</p>
              <p> approach in all of our projects and value customer collaboration.</p>
              <p>and value customer collaboration superior results that fulfill our clients’ needs.</p>
            </div>

        </div>



<div className='MidPage__Container'>
    
<div className="HomeCircle">
    <img src={Circle} alt=""/>
    </div>

<img className='MidPage__Picture' src={Friendly} alt=""/>

            <div className='MidPage__Paragraph'>
            <h2 className='MidPage__Picture__Title' >Friendly</h2>
                <p>We are a group of enthusiastic folks who know how</p>
                <p>how to put people first. Our success depends</p>
                <p>on our customers, and we strive to give them</p>
                <p>the best experience a company can provide.</p>
            </div>

            <div className='MidPage__Paragraph22'>
            <h2 className='MidPage__Picture__Title'  >Friendly</h2>
                <p>We are a group of enthusiastic folks who know how how to put</p>
                <p> people first. Our success depends on our customers, and we</p>
                <p>strive to give them the best experience a company can provide.</p>
            </div>


        </div>

</div>


    )
}

export default MidPage
