import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <h3>Tutoriza2</h3>
      </Link>
      <Link to="/schedules-by-professor">By Professor</Link>
      <Link to="/schedules-by-subject">By Subject</Link>
    </div>
  )
}

export default Header