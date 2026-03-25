import classroomImg from '../assets/classroom image.png'
import './SuccessStories.css'
import st1 from '../assets/st1.png'
import st2 from '../assets/st2.png'
import st3 from '../assets/st3.png'


// All student success stories
const stories = [
  {
    id: 1,
    name: 'James Fuhad',
    subject: 'Mathematics, 2023',
    quote: 'The tutors here are exceptional. I went from struggling to topping my class in just one term.',
    image: st1,
    achievement: 'Distinction in Mathematics',
    stars: '★★★★★'
  },
  {
    id: 2,
    name: 'Janelle Okafor',
    subject: 'Commerce, 2024',
    quote: 'Excellent Coaching gave me the structure and confidence I needed to ace my exams.',
    image: st2,
    achievement: 'Best in Class — Commerce',
    stars: '★★★★★'
  },
  {
    id: 3,
    name: 'Cersei Lannir ',
    subject: 'Sciences, 2023',
    quote: 'I never thought I could love Physics until I joined Excellent Coaching. Best decision ever.',
    image: st3,
    achievement: 'Top of Class — Sciences',
    stars: '★★★★★'
  },
  {
    id: 4,
    name: 'Chidi Obi',
    subject: 'Law, 2024',
    quote: 'My Government and Literature grades improved drastically. The teachers truly care about you.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    achievement: 'A+ in Government',
    stars: '★★★★★'
  },
  {
    id: 5,
    name: 'Fatima Aliyu',
    subject: 'Languages, 2023',
    quote: 'My English improved so much that I scored the highest in my school. Excellent Coaching is the real deal.',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    achievement: 'Highest English Score',
    stars: '★★★★★'
  },
  {
    id: 6,
    name: 'Emeka Chukwu',
    subject: 'Literature, 2024',
    quote: 'The way they break down literature texts is incredible. I finally understood what I was reading.',
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    achievement: 'Distinction in Literature',
    stars: '★★★★★'
  }
]

function SuccessStories() {
  return (
    <div className="success-page">

      {/* Hero banner */}
      <div
        className="success-hero"
        style={{ backgroundImage: `url(${classroomImg})` }}
      >
        <div className="success-hero-overlay">
          <p className="success-hero-tag">Excellent Coaching</p>
          <h1 className="success-hero-title">Success Stories</h1>
          <div className="success-hero-underline"></div>
          <p className="success-hero-subtitle">
            Real students, real results — see what our coaching has achieved
          </p>
        </div>
      </div>

      {/* Stories content */}
      <div className="success-page-content">

        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Over 500 students have achieved excellence with us</p>
        </div>

        {/* Stories grid */}
        <div className="success-grid">
          {stories.map((student) => (
            <div key={student.id} className="success-card">

              {/* Green accent bar */}
              <div className="success-accent"></div>

              {/* Card content */}
              <div className="success-card-content">

                {/* Circular profile photo */}
                <div className="success-img-wrapper">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="success-img"
                  />
                </div>

                {/* Student name */}
                <h3 className="success-name">{student.name}</h3>

                {/* Subject and year in green */}
                <p className="success-subject">{student.subject}</p>

                {/* Star rating */}
                <p className="success-stars">{student.stars}</p>

                {/* Quote in italic */}
                <p className="success-quote">"{student.quote}"</p>

                {/* Achievement badge */}
                <span className="success-badge">{student.achievement}</span>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="success-cta">
          <div className="success-cta-card">
            <h2 className="success-cta-title">Ready to write your own success story?</h2>
            <p className="success-cta-subtitle">Join hundreds of students who have achieved excellence with us</p>
            <a href="/contact" className="success-cta-btn">Enroll Now →</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SuccessStories   