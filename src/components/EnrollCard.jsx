import React from 'react'
import { Card } from 'antd';
import '../CSS/EnrolledCard.css'
function EnrollCard({ friendsData }) {
    console.log("PPPPP", friendsData);
    const { name, date, courses, amount } = friendsData
    return (
        <>
            <div>

                <Card className='enrolled__card' style={{ width: 400, height: 225 }} hoverable='true'>
                    <div className='enrolled__card__heading'>
                        <p style={{ fontWeight: 'bold' }}>{name}</p>
                        <p style={{ color: 'white', fontWeight: '300' }}>{date}</p>
                    </div>
                    <p style={{ color: 'white', fontWeight: '300' }}>Courses Enrolled ({courses.length})</p>
                    <div className='enrolled__card__content'>
                        {courses && courses.map((course) => {
                            return <li>{course}</li>
                        })}
                    </div>
                    <div style={{ color: 'white', fontWeight: '300',marginTop:'1rem' }}>Referral Amount <span style={{ fontWeight: 'bold' }}>₹{amount}</span></div>

                </Card>
            </div>

        </>
    )
}

export default EnrollCard