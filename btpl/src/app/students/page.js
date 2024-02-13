
import React from 'react'
import Link from 'next/link'

function students() {
    
    const StudentsData=[
        {name:'Prathmesh', RollNo:68 ,href:'students/prathmesh'},
        {name:'Prathm', RollNo:58, href:'students/2'},
        {name:'Ganesh', RollNo:22, href:'students/3'},
        {name:'Pratik', RollNo:23, href:'students/4'}

    ];
    // console.log(StudentsData);
        
    

  return (
    <div className='flex justify-center'>
        <h1>students data</h1>
     <ul className=''>
        {StudentsData.map((Data,index)=>(
            <li key={index}>
               <Link href={Data.href}>{Data.name}</Link>
            </li>
        ))

        }
     </ul>
    </div>
  )

}
export default students