import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav class="navbar navbar-expand-lg">
    <Link to="/" className="navbar-brand">pranav yajnik</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link to="/" className="nav-link">home</Link>
        </li>
        <li class="nav-item active">
          <Link to="/about" className="nav-link">about</Link>
        </li>
        <li class="nav-item active">
          <Link to="/gallery" className="nav-link">gallery</Link>
        </li>
        <li class="nav-item active">
          <Link to="/lessons" className="nav-link">lessons</Link>
        </li>
        <li class="nav-item active">
          <Link to="/contact" className="nav-link">contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)
