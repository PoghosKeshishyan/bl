import { Link } from 'react-router-dom';
import '../css/ArchiveJournals.css';

export function ArchiveJournals({ journals, currentJournal, setCurrentJournal }) {
    function onMouseEnterJournal(event, disabled) {
        if (disabled) {
            const result = journals.filter(elem => elem.title === event.target.innerText)[0];
            setCurrentJournal(result);
        }
    }

    return (
        <div className='ArchiveJournals'>
            <div className='months'>
                {
                    journals.map(elem => <div key={elem._id}>
                        <Link
                            to={elem.disabled ? `/journals/${elem.url}` : ''}
                            target={elem.disabled ? '_blank' : ''}
                            className={elem.disabled ? 'active' : ''}
                            onMouseEnter={(e) => onMouseEnterJournal(e, elem.disabled)}
                        >
                            {elem.title}
                        </Link>
                    </div>)
                }
            </div>

            <div className='content'>
                <h2 className='heading'>
                    Բովանդակություն - {currentJournal.title} ({currentJournal.year})
                </h2>

                {
                    currentJournal.content?.map((elem, index) => (
                        <div className='row' key={index}>
                            <p className='sub_content'>{elem.text}</p>
                            <p className='page'>{elem.page}</p>
                        </div>)
                    )
                }
            </div>
        </div>
    )
}