import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>
        Welcome to <strong>Tutoriza2</strong>!
      </h3>
      <p>You can search for tutorship schedules in 2 ways:</p>
      <p>
        <Link to="/schedules-by-professor">By Professor</Link>
      </p>
      <p>
        <Link to="/schedules-by-subject">By Subject</Link>
      </p>
    </div>
  )
}

export default Home