// CourseDetail.jsx
// Displays detailed information about a specific course
// Uses useParams to get the course name dynamically from the URL

import { useParams, useNavigate, Link } from 'react-router-dom'
import classroomImg from '../assets/classroom image.png'
import './CourseDetail.css'

// All course data stored here - each course has its own details
const courseData = {
  mathematics: {
    name: 'Mathematics',
    duration: '1 Year',
    subjects: 6,
    schedule: 'Morning & Evening Classes',
    description: 'Master the fundamentals of mathematics with our expert tutors. From algebra to calculus, we cover everything you need to excel.',
    structure: [
      'Algebra & Calculus',
      'Statistics & Probability',
      'Geometry & Trigonometry',
      'Further Mathematics',
      'Number Theory',
      'Mathematical Reasoning'
    ],
    related: ['sciences', 'commerce', 'languages'],
    doc: '/docs/mathematics.docx'
  },
  commerce: {
    name: 'Commerce',
    duration: '1 Year',
    subjects: 6,
    schedule: 'Morning & Evening Classes',
    description: 'Build a strong foundation in business and commercial studies. Learn financial accounting, economics and business management.',
    structure: [
      'Financial Accounting',
      'Economics',
      'Business Studies',
      'Commerce',
      'Government',
      'Mathematics'
    ],
    related: ['mathematics', 'law', 'literature'],
    doc: '/docs/commerce.docx'
  },
  sciences: {
    name: 'Sciences',
    duration: '1 Year',
    subjects: 6,
    schedule: 'Morning & Evening Classes',
    description: 'Explore the wonders of science with hands-on learning. Our science program covers Physics, Chemistry and Biology in depth.',
    structure: [
      'Physics',
      'Chemistry',
      'Biology',
      'Further Mathematics',
      'Agricultural Science',
      'Technical Drawing'
    ],
    related: ['mathematics', 'commerce', 'languages'],
    doc: '/docs/sciences.docx'
  },
  languages: {
    name: 'Languages',
    duration: '1 Year',
    subjects: 6,
    schedule: 'Morning & Evening Classes',
    description: 'Develop strong communication skills across multiple languages. Build confidence in English and other languages.',
    structure: [
      'English Language',
      'Literature in English',
      'Yoruba / Igbo / Hausa',
      'French',
      'Communication Skills',
      'Creative Writing'
    ],
    related: ['literature', 'law', 'commerce'],
    doc: '/docs/languages.docx'
  },
  law: {
    name: 'Law',
    duration: '1 Year',
    subjects: 6,
    schedule: 'Morning & Evening Classes',
    description: 'Understand legal principles and government structures. Build a solid foundation for a career in law and public service.',
    structure: [
      'Government',
      'Economics',
      'English Language',
      'Literature in English',
      'CRS / IRS',
      'History'
    ],
    related: ['commerce', 'languages', 'literature'],
    doc: '/docs/law.docx'
  },
  literature: {
    name: 'Literature',
    duration: '1 Year',
    subjects: 6,
    schedule: 'Morning & Evening Classes',
    description: 'Develop critical thinking and analytical skills through the study of literature. Explore texts from across the world.',
    structure: [
      'Literature in English',
      'English Language',
      'History',
      'Government',
      'CRS / IRS',
      'French'
    ],
    related: ['languages', 'law', 'commerce'],
    doc: '/docs/literature.docx'
  }
}

function CourseDetail() {
  const { courseName } = useParams()
  const navigate = useNavigate()

  const course = courseData[courseName]

  // If course not found show error message
  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <Link to="/" className="cd-back-btn">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="course-detail">

      {/* Hero banner with course name and background image */}
      <div className="cd-hero" style={{ backgroundImage: `url(${classroomImg})` }}>
        <div className="cd-hero-overlay">
          <p className="cd-hero-tag">Excellent Coaching</p>
          <h1 className="cd-hero-title">{course.name}</h1>
          <div className="cd-hero-underline"></div>
          <p className="cd-hero-desc">{course.description}</p>
        </div>
      </div>

      {/* Main content area */}
      <div className="cd-main">

        {/* Left column */}
        <div className="cd-left">

          {/* Course info card */}
          <div className="cd-info-card">
            <h3 className="cd-info-title">Course Overview</h3>
            <div className="cd-info-item">
              <span className="cd-info-icon">📅</span>
              <div>
                <p className="cd-info-label">Duration</p>
                <p className="cd-info-value">{course.duration}</p>
              </div>
            </div>
            <div className="cd-info-item">
              <span className="cd-info-icon">📚</span>
              <div>
                <p className="cd-info-label">Number of Subjects</p>
                <p className="cd-info-value">{course.subjects} Subjects</p>
              </div>
            </div>
            <div className="cd-info-item">
              <span className="cd-info-icon">🕐</span>
              <div>
                <p className="cd-info-label">Schedule</p>
                <p className="cd-info-value">{course.schedule}</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="cd-buttons">
            <button className="cd-enroll-btn">🎓 Enroll Now</button>
            <a href={course.doc} download className="cd-download-btn">⬇ Download Course Document</a>
          </div>

        </div>

        {/* Right column - course structure */}
        <div className="cd-right">
          <h2 className="cd-structure-title">Course Structure</h2>
          <p className="cd-structure-subtitle">Subjects covered in this programme</p>
          <div className="cd-structure-list">
            {course.structure.map((subject, index) => (
              <div key={index} className="cd-structure-item">
                <div className="cd-structure-left">
                  <span className="cd-structure-num">{index + 1}</span>
                  <span className="cd-structure-name">{subject}</span>
                </div>
                <span className="cd-check">✓</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Related courses */}
      <div className="cd-related-section">
        <h2 className="cd-related-title">Related Courses</h2>
        <div className="cd-related-grid">
          {course.related.map((relatedPath) => {
            const relatedCourse = courseData[relatedPath]
            return (
              <div
                key={relatedPath}
                className="cd-related-card"
                onClick={() => navigate(`/course/${relatedPath}`)}
              >
                <div className="cd-related-accent"></div>
                <div className="cd-related-content">
                  <h3>{relatedCourse.name}</h3>
                  <p>{relatedCourse.description.substring(0, 60)}...</p>
                  <span className="cd-related-link">Explore →</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Back button */}
      <div className="cd-back">
        <Link to="/" className="cd-back-btn">← Back To All Courses</Link>
      </div>

    </div>
  )
}

export default CourseDetail