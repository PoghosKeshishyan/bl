import { Link } from 'react-router-dom';

export function CurrentNewspapers({currentNewspapers}) {
  return (
    <div className='CurrentNewsPapers'>
      {
        currentNewspapers.map(elem => <div key={elem.id} className="box">
          <p className="title">{elem.title} {elem.year}</p>

          <Link to={`terter/${elem.url}`} target='_blank'> 
              <img src={`images/${elem.img}`} alt='tert' /> 
          </Link>
        </div>)
      }
    </div>
  )
}