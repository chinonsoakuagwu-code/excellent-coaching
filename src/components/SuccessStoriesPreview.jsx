import React from 'react'
import './SuccessStoriesPreview.css'
import st1 from '../assets/st1.png'
import st2 from '../assets/st2.png'
import st3 from '../assets/st3.png'


// Array of student 
const ststories = [
  {
    id: 1,
    name: 'James Fuhad',
    subject: 'Mathematics, 2023',
    quote: 'Excellent Coaching changed my academic life completely',
    image: st1,
    achievement: 'Distinction in Mathematics',
    rating: '★★★★★'
  },

   {
    id: 2,
    name: 'Janelle Okafor',
    subject: 'Commerce, 2024',
    quote: 'Excellent Coaching gave me the structure and confidence I needed to ace my exams.',
    image: st2,
    achievement: 'Best in Class — Commerce',
    rating: '★★★★'
  },

  {
    id: 3,
    name: 'Cersei Lannir',
    subject: 'Sciences, 2023',
    quote: 'I never thought I could love Physics until I joined Excellent Coaching. Best decision ever.',
    image: st3,
    achievement: 'Top of Class — Sciences',
    rating: '★★★★★'
  }
]

function SuccessStoriesPreview() {
  return (
    // stories section wrapper
    <section className="stories" id="stories">

      {/* Section header */}
      <div className="section-header">
        <h2 className="section-title">Success Stories</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">Real Student, real results — see what our coaching has acheived</p>
      </div>

      {/* stories cards grid */}
      <div className="story-grid">
        {ststories.map((student) => (
          <div key={student.id} className="story-card">

            {/* Green accent bar at top */}
            <div className="card-accent"></div>

            {/* Card content */}
            <div className="story-content">

              {/* Circular profile photo */}
              <div className="story-img-wrapper">
                <img
                  src={student.image}
                  alt={student.name}
                  className="story-img"
                />
              </div>

              {/* Student name */}
              <h3 className="story-name">{student.name}</h3>

              {/* Subject in green */}
              <p className="story-subject">{student.subject}</p>

              {/* Short bio */}
              <p className="story-quote">{student.quote}</p>

              {/* Achievement badge */}
                <span className="story-badge">{student.achievement}</span>

                {/* Star rating */}
                <p className="story-stars">{student.rating}</p>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default SuccessStoriesPreview