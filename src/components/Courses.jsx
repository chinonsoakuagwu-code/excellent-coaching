import { Link } from 'react-router-dom'
import './Courses.css'

const courses = [
    {
    id: 1,
     name: 'Mathematics', 
     description: 'Master numbers and problem solving with expert tutors', 
     icon: '📐', 
     path: 'mathematics'
    },

    {id: 2,
     name: 'Commerce', 
     description: 'Learn business, finance and commercial studies in depth', 
     icon: '📊', 
     path: 'commerce'
    },

    {
    id: 3,
    name: 'Languages',
    description: 'Build strong communication skills across multiple languages',
    icon: '📖',
    path: 'languages'
  },

  {
    id: 4,
    name: 'Sciences',
    description: 'Explore Physics, Chemistry and Biology with practical focus',
    icon: '🔬',
    path: 'sciences'
  },

  {
    id: 5,
    name: 'Law',
    description: 'Understand legal principles and government structures',
    icon: '⚖️',
    path: 'law'
  },

  {
    id: 6,
    name: 'Literature',
    description: 'Develop critical thinking through literature and writing',
    icon: '📝',
    path: 'literature'
  }
]

function Courses() {
    
    return( 
    <section className='courses' id='courses'>
        <div className='section-header'>
            <h2 className='section-title'>Our Courses</h2>
            <div className='section-underline'></div>
        </div>
        
        {/*Courses Grid*/}
            <div className='courses-grid'>
                {courses.map((course) => (
                    <div key={course.id} className="course-card">
                    {/* Green accent bar at the top of the card */}
                    <div className="card-accent"></div>

            {/* Card content */}
        <div className="card-content">
            {/* adding the icon, name and description */}
            {/* Hint: use course.icon, course.name, course.description */}
            <div className='card-header'>
            <span className='course-icon'>{course.icon}</span> 
            <h3 className='course-name'>{course.name}</h3>
            </div>

            <p className='course-description'>{course.description}</p>
        </div>
        </div>
                ))}
            </div>
    
    </section>
    )
}

export default Courses