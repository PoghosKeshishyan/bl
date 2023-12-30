import { useEffect, useState } from 'react';
import { CurrentJournals } from '../components/CurrentJournals';
import '../css/HomePage.css';
import axios from '../axios';

export function HomePage() {
  const [currentJournals, setCurrentJournals] = useState([]);

  useEffect(() => {
    loadingData();
  }, [])

  async function loadingData() {
    let currentYear = await axios.get('years');
    currentYear = currentYear.data[0].years.reverse()[0];

    let journalsResp = await axios.get(`journals/${currentYear}`);
    journalsResp = journalsResp.data.slice(-3);
    setCurrentJournals(journalsResp);
  }

  return (
    <div className='HomePage'>
      <div className='content'>
        <h1>Բարի գալուստ</h1>
        <p><b>Սիրելի՛ ընթերցողներ.</b></p>
        <p>Բացելով էլեկտրոնային այս կայքը` նպատակ ունենք թերթի միջոցով նպաստել Հայաստանում և Հայաստանից դուրս` արտասահմանում գտնվող մեր հավատացյալ եղբայրների ու քույրերի, ընդհանրապես հայ ժողովրդի հոգևոր շինությանը: Մենք գիտենք, որ արտասահմանում գտնվող յուրաքանչյուր հայ կարիք ունի իմանալու և մեծ հետաքրքրասիրությամբ ուզում է իմանալ Հայաստանի ԱՀՔ եկեղեցում տեղի ունեցող անցուդարձի մասին: Մենք տպագրում ենք «Բարի լուր» թերթը և անվճար ուղարկում Հայաստանից դուրս` Ռուսաստան, Եվրոպա, Ամերիկա: Սիրելի' ընթերցողներ, խնդրում ենք աղոթել թերթի համար, որպեսզի այն ծառայի մեր ժողովրդի ապաշխարությանն ու հոգևոր արթնությանը:</p>
      </div>

      <CurrentJournals currentJournals={currentJournals} />
    </div>
  )
}
