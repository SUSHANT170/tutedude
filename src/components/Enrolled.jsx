import React, { useEffect, useState } from 'react'
import '../CSS/Enrolled.css'
import EnrollCard from './EnrollCard'
function Enrolled() {
  const [friendsData, setFriendsData] = useState();
  const [isVisibile,setIsVisible]=useState(true)
  useEffect(() => {
    const enrollData = [{
      name: 'Dhiraj Saxsena',
      date: '14 Sep 2022',
      courses: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'JAVA'],
      amount: 185
    }, {
      name: 'Subhash Mishra',
      date: '15 Sep 2022',
      courses: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'JAVA', 'C++','DSA','AWS'],
      amount: 485
    }, {
      name: 'Prafull Kumar',
      date: '16 Sep 2022',
      courses: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'JAVA', 'C++'],
      amount: 485
    }]
    setFriendsData(enrollData)
  }, [])
  return (
    <>
      <div className='enroll__btn' onClick={()=>setIsVisible((prev)=>!prev)}>
        Friends who enrolled {isVisibile && friendsData && `(${friendsData.length})`}
      </div>
      <div className='enroll'>
        {isVisibile && friendsData && friendsData.map((friendData, index) => {
          return < EnrollCard friendsData={friendData} />
        })}
      </div>
    </>
  )
}

export default Enrolled