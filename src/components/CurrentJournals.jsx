import { Link } from 'react-router-dom';

export function CurrentJournals({ currentJournals }) {
  return (
    <div className='CurrentNewsPapers'>
      {
        currentJournals.map(elem => <div key={elem._id} className="box">
          <p className="title">{elem.title} {elem.year}</p>

          <Link to={`journals/${elem.url}`} target='_blank'>
            <img src={`images/${elem.img}`} alt='tert' />
          </Link>
        </div>)
      }
    </div>
  )
}