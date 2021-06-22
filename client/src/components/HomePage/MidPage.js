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
        <p>
            Each project starts with an in-depth brand <br/>
          research to ensure we only create products that <br/>
          serve a purpose. We merge art, design, and <br/>
          technology into exciting new solutions.</p>
        </div>
        <div className='MidPage__Paragraph22'>
        <h2 className='MidPage__Picture__Title'  >Passionate</h2>
        <p>
            Each project starts with an in-depth brand research to ensure we <br/>
        only create products that serve a purpose. We merge art, <br/>
        design, and technology into exciting new solutions.</p>
        </div>



         <div className='MidPage__Paragraph-Desktop'>
         <h2 className='MidPage__Picture__Title' >Passionate</h2>

        <p>Each project starts with an in-depth brand research <br/>
         to ensure we only create products that serve a <br/>
        purpose. We merge art, design, and technology <br/>
                into exciting new solutions.
         </p>
        </div> 

            </div>
            

        <div className='MidPage__Container'>
        <div className="HomeCircle">
    <img src={Circle}alt=""/>

</div>

<img className='MidPage__Picture' src={Resourceful} alt=""/>

            <div className='MidPage__Paragraph'>
            <h2 className='MidPage__Picture__Title' >Resourceful</h2>
              <p>
                  Everything that we do has a strategic purpose. <br/>
              We use an agile approach in all of our projects <br/>
              and value customer collaboration. It guarantees <br/>
              superior results that fulfill our clients needs.
              </p>
            </div>

            <div className='MidPage__Paragraph22'>
            <h2 className='MidPage__Picture__Title'>Resourceful</h2>
              <p>
               Everything that we do has a strategic purpose. We use an agile
               approach in all of our projects and value customer collaboration. <br/>
               It guarantees superior results that fulfill our clients needs.
               </p>
            </div>


            <div className='MidPage__Paragraph-Desktop'>
            <h2 className='MidPage__Picture__Title'>Resourceful</h2>

        <p>
        Everything that we do has a strategic purpose. We <br/>
        use an agile approach in all of our projects and <br/>
        value customer collaboration. It guarantees <br/>  
        superior results that fulfill our clients’ needs.
        </p>
        </div> 

        </div>



<div className='MidPage__Container'>
    
<div className="HomeCircle">
    <img src={Circle} alt=""/>
    </div>

<img className='MidPage__Picture' src={Friendly} alt=""/>

            <div className='MidPage__Paragraph'>
            <h2 className='MidPage__Picture__Title'>Friendly</h2>
                <p>We are a group of enthusiastic folks who know how <br/>
                how to put people first. Our success depends <br/>
                on our customers, and we strive to give them <br/>
                the best experience a company can provide.</p>
            </div>

            <div className='MidPage__Paragraph22'>
            <h2 className='MidPage__Picture__Title'>Friendly</h2>
                <p>We are a group of enthusiastic folks who know how how to put <br/>
                 people first. Our success depends on our customers, and we <br/>
                strive to give them the best experience a company can provide.</p>
            </div>

           
        <div className='MidPage__Paragraph-Desktop '>
        <h2 className='MidPage__Picture__Title Friendly-Desktop-Title'>Friendly</h2>

             <p>We are a group of enthusiastic folks who know <br/>
              how how to put people first. Our success depends on <br/>
              our customers, and we strive to give them the best <br/>
              experience a company can provide.</p>
        </div> 

        </div>

</div>


    )
}

export default MidPage
