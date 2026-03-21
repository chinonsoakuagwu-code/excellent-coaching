import React from 'react'
import './WhyChooseUs.css'
import book from '../assets/book.png'
import mentoring from '../assets/mentoring.png'
import target from '../assets/target.png'
import trophy from '../assets/trophy.png'

const features = [
    {
        id: 1, 
        icon: trophy, 
        title: "Experienced Teachers", 
        description: 'Learn from qualified educators with years of proven experience in their subject areas'
    },

    {
    id: 2,
    icon: book,
    title: 'Structured Curriculum',
    description: 'Well organised course content designed to maximise understanding and academic performance'
  },

  {
    id: 3,
    icon: target,
    title: 'Proven Results',
    description: 'Over 95% of our students achieve distinction in their exams across all subject areas'
  },

  {
    id: 4,
    icon: mentoring,
    title: 'Personal Mentoring',
    description: 'Every student receives dedicated attention and personalised guidance throughout their studies'
  }

]

function WhyChooseUs() {
  return (
    <section className='whyus' id='whyus'>
        <div className='section-header'>
            <h2 className='section-title'>Why choose Us</h2>
            <div className='section-underline'></div>
            <p className='section-subtitle'>We don't just teach - we build futures</p>
        </div>

        {/*Grid*/}
        <div className='why-grid'>
            {features.map((feature) => (
                <div key={feature.id} className='why-card'>
                    
                    <div className='whyus-content'>
                        <img src={feature.icon} alt={feature.title} className='card-icon'/>
                        <h3 className='card-name'>{feature.title}</h3>

                        <p className='card-description'>{feature.description}</p>
                    </div>
                </div>
            ))}

        </div>

        <div className='why-cta'>

        </div>

    </section>
  )
}

export default WhyChooseUs