import React from 'react'
import { Card } from 'antd';
import '../CSS/BalanceContent.css';

function BalanceContent() {
    return (
        <>
            <p className='refer'>UI/UX {">"} Refer & Earn</p>
            <div className='balance__content'>
                <div className='card__content'>
                    <Card className='custom__card' style={{ width: 500, height: 200 }} hoverable='true'>
                        <div className='card__heading'>
                            <p>Referral Earning</p>
                            <p>Total Referrals</p>
                            <p>Wallet Balance</p>
                        </div>
                        <div className='card__heading__content'>
                            <p>₹ 2,500</p>
                            <p style={{ marginLeft: '-7.8rem' }}>7</p>
                            <p><span style={{ marginLeft: '-5.4rem' }} >₹ 500</span></p>
                        </div>
                        <div className='card__button'>
                            <button>Withdraw Balance</button>
                        </div>
                    </Card>
                </div>
                <div className='referral__content'>
                    <div className='referral__heading'> Your Referral Code</div>
                    <div className='referral__code'>
                        <span>E</span>
                        <span>D</span>
                        <span>C</span>
                        <span>H</span>
                        <span>5</span>
                        <span>4</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BalanceContent