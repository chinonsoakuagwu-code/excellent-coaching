// Courses.jsx (page)
// Full courses page - accessible from the navbar
// Shows all 6 courses with a hero banner and detailed cards

import { useNavigate } from 'react-router-dom'
import classroomImg from '../assets/classroom image.png'
import './Courses.css'

// All 6 courses with full details
const courses = [
  {
    id: 1,
    name: 'Mathematics',
    description: 'Master numbers and problem solving with our expert tutors. From algebra to calculus we cover everything you need.',
    icon: '📐',
    path: 'mathematics',
    subjects: 6,
    duration: '1 Year'
  },
  {
    id: 2,
    name: 'Commerce',
    description: 'Learn business, finance and commercial studies in depth. Build skills for a career in business and economics.',
    icon: '📊',
    path: 'commerce',
    subjects: 6,
    duration: '1 Year'
  },
  {
    id: 3,
    name: 'Languages',
    description: 'Build strong communication skills across multiple languages. Develop confidence in English and beyond.',
    icon: '📖',
    path: 'languages',
    subjects: 6,
    duration: '1 Year'
  },
  {
    id: 4,
    name: 'Sciences',
    description: 'Explore Physics, Chemistry and Biology with a practical focus. Hands-on learning for future scientists.',
    icon: '🔬',
    path: 'sciences',
    subjects: 6,
    duration: '1 Year'
  },
  {
    id: 5,
    name: 'Law',
    description: 'Understand legal principles and government structures. Build a solid foundation for a career in law.',
    icon: '⚖️',
    path: 'law',
    subjects: 6,
    duration: '1 Year'
  },
  {
    id: 6,
    name: 'Literature',
    description: 'Develop critical thinking through literature and writing. Explore texts from Nigeria and around the world.',
    icon: '📝',
    path: 'literature',
    subjects: 6,
    duration: '1 Year'
  }
]

function CoursesPage() {
  const navigate = useNavigate()

  return (
    <div className="courses-page">

      {/* Hero banner */}
      <div
        className="courses-hero"
        style={{ backgroundImage: `url(${classroomImg})` }}
      >
        <div className="courses-hero-overlay">
          <p className="courses-hero-tag">Excellent Coaching</p>
          <h1 className="courses-hero-title">Our Courses</h1>
          <div className="courses-hero-underline"></div>
          <p className="courses-hero-subtitle">
            Choose from our wide range of subjects taught by experienced educators
          </p>
        </div>
      </div>

      {/* Courses grid */}
      <div className="courses-page-content">
        <div className="courses-page-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className="courses-page-card"
              onClick={() => navigate(`/course/${course.path}`)}
            >
              {/* Green accent bar */}
              <div className="courses-page-accent"></div>

              <div className="courses-page-card-content">

                {/* Icon and name on same line */}
                <div className="courses-page-card-header">
                  <span className="courses-page-icon">{course.icon}</span>
                  <h3 className="courses-page-name">{course.name}</h3>
                </div>

                {/* Description */}
                <p className="courses-page-desc">{course.description}</p>

                {/* Course meta info */}
                <div className="courses-page-meta">
                  <span className="courses-page-badge">📚 {course.subjects} Subjects</span>
                  <span className="courses-page-badge">⏱ {course.duration}</span>
                </div>

                {/* View course link */}
                <p className="courses-page-link">View Course →</p>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default CoursesPage