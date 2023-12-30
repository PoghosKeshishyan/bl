import { NavLink as Link } from 'react-router-dom'
import '../css/Header.css'

export function Header() {
  return (
    <div className='Header'>
      <div className='image'>
        <img src='images/header.jpg' alt='header' />
      </div>

      <nav>
        <Link to='/'>Ընթացիկ</Link>
        <Link to='/archive'>Արխիվ</Link>
        <Link to='/links'>Հղումներ</Link>
        <Link to='/about'>Մեր մասին</Link>
        <Link to='/request'>Հետադարձ կապ</Link>
      </nav>
    </div>
  )
}
