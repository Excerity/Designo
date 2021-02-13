import {React, Fragment} from 'react'

function DesignImageDesktop({ type }) {
    return (
        <Fragment>
            <div className='Design__Image__Container__Desktop'>
            {/* <div className='Repeated__App__Desktop' > */}
            <img  className='' src={`/images/desktop-${type}-design.jpg`} alt=""/>
            </div>

            <div className='Repeated__Graphic__Desktop'>
            <img  className='Repeated__Graphic__Image__Desktop' src={`/images/desktop-${type}-design-Large.jpg`} alt=""/>
        </div>

            {/* </div> */}
          
        </Fragment>
    )
}

export default DesignImageDesktop
