import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-list">
            <li><a href='/'>Home</a></li>
            <li><a href='/createblog'>Add Blog</a></li>

        </ul>
    </nav>
  )
}

export default Navbar
