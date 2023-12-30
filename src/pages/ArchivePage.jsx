import { useEffect, useState } from 'react';
import { ArchiveJournals } from '../components/ArchiveJournals';
import { ArchiveSearchBar } from '../components/ArchiveSearchBar';
import { ModalPage } from './ModalPage';
import '../css/ArchivePage.css';
import axios from '../axios';

export function ArchivePage() {
    const [years, setYears] = useState([]);
    const [journals, setJournals] = useState([]);
    const [currentJournal, setCurrentJournal] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchedResults, setSearchedResults] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        loadingData();
    }, [])

    async function loadingData() {
        // years
        const yearsResp = await axios.get('years');
        setYears(yearsResp.data[0].years.reverse());

        // all newspapers
        const journalsResp = await axios.get(`journals/${yearsResp.data[0].years[0]}`);
        setJournals(journalsResp.data);

        // first newspapers
        setCurrentJournal(journalsResp.data[0]);
    }

    async function onChangeSelect(event) {
        const response = await axios.get(`journals/${event.target.value}`);
        setJournals(response.data);
        setCurrentJournal(response.data[0]);
    }

    async function submitHandler(event) {
        event.preventDefault();

        if (searchInput) {
            const searchedText = searchInput.toLowerCase();
            const allJournalsResponse = await axios.get('journals');
            const allJournals = allJournalsResponse.data;  
            let filteredResults = [];
        
            allJournals.forEach(newspaper => {
                const newspaperResults = newspaper.content
                    .map(el => ({
                        url: newspaper.url,
                        year: newspaper.year,
                        title: newspaper.title,
                        ...el
                    }))
                    .filter(content => content.text.toLowerCase().includes(searchedText));
        
                filteredResults = filteredResults.concat(newspaperResults);
            });

            setModalOpened(true);
            setSearchedResults(filteredResults);

            // const searchedText = serachInput.toLowerCase();
            // const allNewspapersResp = await axios.get('newspapers');
            // const allNewspapersData = allNewspapersResp.data;
            // const result = [];

            // for (let i = 0; i < allNewspapersData.length; i++) {
            //     const content = allNewspapersData[i].content;
            //     const resultObj = content.filter(el => el.text.toLowerCase().includes(searchedText));

            //     if (resultObj.length) {
            //         resultObj[0].url = allNewspapersData[i].url;
            //         resultObj[0].year = allNewspapersData[i].year;
            //         resultObj[0].title = allNewspapersData[i].title;
            //         result.push(resultObj[0]);
            //     }
            // }
        }
    }

    return (
        <div className='ArchivePage'>
            {
                modalOpened && <ModalPage
                    setModalOpened={setModalOpened}
                    searchedResults={searchedResults}
                />
            }

            <ArchiveSearchBar
                years={years}
                serachInput={searchInput}
                submitHandler={submitHandler}
                onChangeSelect={onChangeSelect}
                setSearchInput={setSearchInput}
            />

            <ArchiveJournals
                journals={journals}
                currentJournal={currentJournal}
                setCurrentJournal={setCurrentJournal}
            />
        </div>
    )
}
