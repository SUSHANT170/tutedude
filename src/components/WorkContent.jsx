import React, { useEffect, useState } from 'react'
import WorkSubContent from './WorkSubContent'
import people from "./images/people.png"
import wallet from './images/wallet.png'
import rupee from './images/rupee.png'
import discount from './images/discount.png'
import coupon from './images/coupon.png'
import '../CSS/WorkContent.css'

function WorkContent() {
    const [data, setData] = useState()
    useEffect(() => {
        const workData = [{
            img: people,
            heading: 'Invite your Friends',
            content: 'Share the link tutedude.com with your friends'
        },
        {
            img: coupon,
            heading: 'Friend purchases any course',
            content: 'Using your REFERRAL CODE in the payments page'
        },
        {
            img: rupee,
            heading: 'You get ₹ 200 as referral money',
            content: 'On total purchase the friend makes,into your wallet'
        },
        {
            img: discount,
            heading: 'Your friend gets ₹ 200 off',
            content: 'On his overall fee on successfull purchase using your referral code'
        },
        {
            img: wallet,
            heading: 'Transfer money from wallet',
            content: 'When the wallet balance reaches ₹200 or more, you can withdraw it'
        }
        ]
        setData(workData)
    }, [])
    return (
        <>
            <h3 className='work__heading'>How does it work ?</h3>
            <div className='work__content__main'>
                {data && data.map((workData, index) => {
                    return <WorkSubContent workData={workData} key={index} />
                })}

            </div>
        </>
    )
}

export default WorkContent