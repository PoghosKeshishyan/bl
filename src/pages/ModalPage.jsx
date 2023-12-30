import { Link } from 'react-router-dom';
import '../css/ModalPage.css';

export function ModalPage({ searchedResults, setModalOpened }) {
    return (
        <div className="ModalPage">
            <i className="fa-solid fa-xmark" onClick={() => setModalOpened(false)} />

            <h2>Որոնման արդյնունքը</h2>
            {!searchedResults.length && <h2 style={{marginTop: '20px'}}>դատարկ է</h2>}

            <div className="box-container">
                {
                    searchedResults.map((elem, index) => (
                        <Link className='box' to={`/terter/${elem.url}`} target='_blank' key={index}>
                            <p>{index + 1}. {elem.text}</p>
                            <span>էջ {elem.page} - {elem.title} {elem.year}</span>
                        </Link>)
                    )
                }
            </div>
        </div>
    )
}
