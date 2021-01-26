import React from 'react'
import '../MidPage.css'

function MidPage({ Passionate, Friendly, Resourceful, Circle }) {
    return (
        <div className='MidPage'>
     
<div className="circle">
    <img src={Circle} alt=""/>

</div>

<img className='MidPage__Picture' src={Passionate} alt=""/>
        <div className='MidPage__Paragraph'>
        <h2>Passionate</h2>
        <p>Each project starts with an in-depth brand</p>
         <p>research to ensure we only create products that</p>
         <p> serve a purpose. We merge art, design, and</p>
        <p>technology into exciting new solutions.</p>
        </div>
     


<div className="circle">
    <img src={Circle}alt=""/>

</div>

<img className='MidPage__Picture' src={Resourceful} alt=""/>

            <div className='MidPage__Paragraph'>
            <h2>Resourceful</h2>
              <p>Everything that we do has a strategic purpose.</p>
              <p>We use an agile approach in all of our projects</p>
              <p>and value customer collaboration. It guarantees</p>
              <p>superior results that fulfill our clients’ needs.</p>
            </div>

                <div className="circle">
    <img src={Circle} alt=""/>

</div>

<img className='MidPage__Picture' src={Friendly} alt=""/>

            <div className='MidPage__Paragraph'>
            <h2>Friendly</h2>
                <p>We are a group of enthusiastic folks who know how</p>
                <p>how to put people first. Our success depends</p>
                <p>on our customers, and we strive to give them</p>
                <p>the best experience a company can provide.</p>
            </div>
           


        </div>

    )
}

export default MidPage
