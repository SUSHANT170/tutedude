import React from 'react'
import '../CSS/WorkSubContent.css'

function WorkSubContent({workData}) {
    return (
        <div style={{marginTop:'0.5rem'}}>
            <div className='icon'>
                <div className='icon__image'>
                    <img src={workData.img} alt='img' className='work__image' />
                </div>
                <div className='icon__content'>
                    <h4>{workData.heading}</h4>
                    <p>{workData.content}</p>
                </div>
            </div>

        </div>
    )
}

export default WorkSubContent