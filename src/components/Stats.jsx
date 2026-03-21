import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <section className="stats">
      <div className="stats-card">

        {/* Main heading */}
        <p className="stats-heading">5000+ Students Achieved Excellence</p>

        {/* 3 stats side by side */}
        <div className="stats-grid">

          {/* Stat 1 */}
          <div className="stat-item">
            <h3 className="stat-number">5000+</h3>
            <p className="stat-label">Total Students</p>
          </div>

          {/* Vertical divider line */}
          <div className="stat-divider"></div>

          {/* Stat 2 */}
          <div className="stat-item">
            <h3 className="stat-number">95%</h3>
            <p className="stat-label">Success Rate</p>
        </div>

          <div className="stat-divider"></div>

          {/* Stat 3 */}
          <div className="stat-item">
            <h3 className="stat-number">20+</h3>
            <p className="stat-label">Years of Expertise</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats