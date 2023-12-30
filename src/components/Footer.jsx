import '../css/Footer.css';

export function Footer() {
  return (
    <div className='Footer'>
      <div className="box">
        <p><b>«Բարի լուր»</b> ամսաթերթի խմբագրություն</p>
      </div>

      <div className="box">
        <i className='fa-solid fa-phone'></i>
        <p>+374 93532526, +374 93954930</p>
      </div>

      <div className="box">
        <i className='fa-solid fa-envelope'></i>

        <div className='image'>
          <a href='mailto::info@barilur.org'>
            info@barilur.org
          </a>
        </div>
      </div>
    </div>
  )
}
