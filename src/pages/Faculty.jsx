import classroomImg from '../assets/classroom image.png'
import './FacultyPage.css'

// All faculty members data
const facultyMembers = [
    {
    id: 1,
    name: 'Dr. Emmanuel Adeyemi',
    subject: 'Director & Head of Centre',
    bio: 'Founded Excellent Coaching over a decade ago with a vision to provide quality education to every student. Holds a doctorate in Education Management.',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    qualification: 'Ph.D Education Management, University of Lagos',
    isDirector: true 
  },
  
  {
    id: 2,
    name: 'Prof. David Raya',
    subject: 'Mathematics',
    bio: 'Passionate about logical reasoning and problem solving. Over 15 years of teaching experience.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    qualification: 'M.Sc Mathematics, University of Lagos',
    isDirector: false 

  },
  {
    id: 3,
    name: 'Dr. Evelyn Reed',
    subject: 'Sciences',
    bio: 'Dedicated to practical experiments and critical thinking. Specialist in Physics and Chemistry.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    qualification: 'Ph.D Sciences, University of Ibadan',
    isDirector: false 
  },
  {
    id: 4,
    name: 'Ms. Sarah Johnson',
    subject: 'Languages',
    bio: 'Focused on communication and cultural understanding. Expert in English and French.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    qualification: 'B.A English, Obafemi Awolowo University',
    isDirector: false 
  },
  {
    id: 5,
    name: 'Mr. James Okafor',
    subject: 'Commerce',
    bio: 'Expert in business strategy, financial accounting and economic principles.',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    qualification: 'M.Sc Economics, University of Benin'
  },
  {
    id: 6,
    name: 'Mrs. Amina Yusuf',
    subject: 'Law',
    bio: 'Experienced in government, constitutional law and civic education for students.',
    image: 'https://randomuser.me/api/portraits/women/71.jpg',
    qualification: 'LLB Law, Ahmadu Bello University',
    isDirector: false 
  },
  {
    id: 7,
    name: 'Mr. Chukwuemeka Eze',
    subject: 'Literature',
    bio: 'Passionate about African literature, creative writing and analytical reading skills.',
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    qualification: 'M.A Literature, University of Nigeria',
    isDirector: false 
  }
]

function Faculty() {
  return (
    <div className="faculty-page">

      {/* Hero banner */}
      <div
        className="faculty-hero"
        style={{ backgroundImage: `url(${classroomImg})` }}
      >
        <div className="faculty-hero-overlay">
          <p className="faculty-hero-tag">Excellent Coaching</p>
          <h1 className="faculty-hero-title">Meet Our Faculty</h1>
          <div className="faculty-hero-underline"></div>
          <p className="faculty-hero-subtitle">
            Learn from experienced educators dedicated to your success
          </p>
        </div>
      </div>

      {/* Faculty grid */}
      <div className="faculty-page-content">

        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Our Instructors</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Qualified and passionate educators committed to excellence</p>
        </div>

        {/* 3 column grid of faculty cards */}
        <div className="faculty-page-grid">
          {facultyMembers.map((member) => (
            <div key={member.id}
            className={`faculty-page-card ${member.isDirector ? 'director-card' : ''}`}
            >
              

              {/* Green accent bar at top */}
              <div className="faculty-page-accent"></div>

              {/* Card content */}
              <div className="faculty-page-card-content">

                {/* Circular profile photo */}
                <div className="faculty-page-img-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="faculty-page-img"
                  />
                </div>

                {/* Teacher name */}
                <h3 className="faculty-page-name">{member.name}</h3>

                {/* Subject in green */}
                <p className="faculty-page-subject">{member.subject}</p>

                {/* Qualification */}
                <p className="faculty-page-qualification">{member.qualification}</p>

                {/* Divider line */}
                <div className="faculty-page-divider"></div>

                {/* Bio */}
                <p className="faculty-page-bio">{member.bio}</p>

              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Faculty