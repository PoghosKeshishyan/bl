import { Link } from 'react-router-dom';
import '../css/ArchiveNewspapers.css';

export function ArchiveNewspapers({ newspapers, currentNewspaper, setCurrentNewspaper }) {

    function onChangeCurrentNewspapers(event, disabled) {
        if (disabled) {
            const result = newspapers.filter(elem => elem.title === event.target.innerText)[0];
            setCurrentNewspaper(result);
        }
    }

    return (
        <div className='ArchiveNewspapers'>
            <div className='months'>
                {
                    newspapers.map(elem => <div key={elem.id}>
                        <Link
                            to={elem.disabled ? `/terter/${elem.url}` : ''}
                            target={elem.disabled ? '_blank' : ''}
                            className={elem.disabled ? 'active' : ''}
                            onMouseEnter={(e) => onChangeCurrentNewspapers(e, elem.disabled)}
                        >
                            {elem.title}
                        </Link>
                    </div>)
                }
            </div>

            <div className='content'>
                <h2 className='heading'>
                    Բովանդակություն - {currentNewspaper.title} ({currentNewspaper.year})
                </h2>

                {
                    currentNewspaper.content?.map((elem, index) => <div className='row' key={index}>
                        <p className='sub_content'>{elem.text}</p>
                        <p className='page'>{elem.page}</p>  
                    </div>)
                }
            </div> 
        </div>
    )
}

