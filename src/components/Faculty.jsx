import React from 'react'
import './Faculty.css'
import pfp1 from '../assets/Pfp1.png'
import pfp2 from '../assets/Pfp2.png'
import pfp3 from '../assets/pfp3.png'


// Array of faculty members
const faculty = [
  {
    id: 1,
    name: 'Prof. David Raya',
    subject: 'Mathematics',
    bio: 'Passionate about logical reasoning and problem solving',
    image: pfp1 
  },
  {
    id: 2,
    name: 'Dr. Evelyn Reed',
    subject: 'Sciences',
    bio: 'Dedicated to practical experiments and critical thinking',
    image: pfp2
  },
  {
    id: 3,
    name: 'Ms. Sarah Johnson',
    subject: 'Languages',
    bio: 'Focused on communication and cultural understanding',
    image: pfp3
  }
]

function Faculty() {
  return (
    // Faculty section wrapper
    <section className="faculty" id="faculty">

      {/* Section header */}
      <div className="section-header">
        <h2 className="section-title">Meet Our Instructors</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">Learn from the best — experienced educators dedicated to your success</p>
      </div>

      {/* Faculty cards grid */}
      <div className="faculty-grid">
        {faculty.map((member) => (
          <div key={member.id} className="faculty-card">

            {/* Green accent bar at top */}
            <div className="card-accent"></div>

            {/* Card content */}
            <div className="faculty-content">

              {/* Circular profile photo */}
              <div className="faculty-img-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="faculty-img"
                />
              </div>

              {/* Teacher name */}
              <h3 className="faculty-name">{member.name}</h3>

              {/* Subject in green */}
              <p className="faculty-subject">{member.subject}</p>

              {/* Short bio */}
              <p className="faculty-bio">{member.bio}</p>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Faculty