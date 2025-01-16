import React from 'react'
import './collegeHome.css'
import collegeimg from "../asset/colllege.webp"
import FullWidthTabs from "./tabs";


function HomePage() {
    return (
        
        <div className=''>
            <div className='title'>

                <h1>Al Ameen College of Arts and Science Welcoming You</h1>
                <p>Re-accredited by NAAC with A grade (CGPA 3.15) | Affiliated to MG University</p>

                <img className='firstimg' src={collegeimg} alt="" />

            </div>


            <div className='para' >
                <p>Al-Ameen College, Edathala, Aluva is a pioneering Arts and Science Co-Educational Institution of higher education under aided sector. It is one of the flagship institutions run by the Al-Ameen Education Trust, Kochi. The Trust is part of the Al-Ameen Movement established in Bangalore by a group of dedicated, inspired thinkers and professionals who wished to impart education to the minority sections of society. Al-Ameen College is an Arts and Science Co-Educational institution managed by the Al-Ameen Education Trust in Kochi. The Founder of the Al-Ameen Movement, Dr Mumthaz Ahamed Khan, is a visionary who strove to make his dreams reality. His innate integrity and compassion compelled him toward the development of the downtrodden sections of society.</p>

                
            </div>

            <div className='title'>
                <img className='firstimg' src="https://colleges18.s3.ap-south-1.amazonaws.com/medium_Al_Ameen_College_Edathala_ACE_Ernakulam_1_5ef6d6eb4a.jpg" alt=""  />
            </div>
            <h1 style={{color:'yellow',textShadow:"1px 1px 4px black"}} className='title'>Infrastructures of Our College</h1>
            <div className='title'>
                <img className='firstimg' src="https://www.alameenbedcollege.org/images/demo/slider/banner1.png" alt="" />
            </div>

            <div className='title'>
                <img style={{width: 1000,}} className='firstimg' src="https://alameen.edu.in/wp-content/uploads/2022/07/alaeen_ban1-1900x662-1.jpg" alt="" />
            </div>
            <div className='title'>
                <img style={{width: 1000,}} className='firstimg' src="https://mycareersview.com/afile/mcv18531_Al-Ameen-Medical-CollegeBijapur.png" alt="" />
            </div>
            

<br />
<br />
        <div>
           <FullWidthTabs/>
        </div>
            
        </div>
    )
}

export default HomePage
