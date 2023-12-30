import { useEffect, useState } from 'react';
import { CurrentNewspapers } from '../components/CurrentNewspapers';
import '../css/HomePage.css';
import axios from '../axios';

export function HomePage() {
  const [currentNewspapers, setCurrentNewspapers] = useState([]);

  useEffect(() => {
    loadingData();
  }, [])

  async function loadingData() {
    // monthly for the last three months
    const response = await axios.get('newspapers');
    setCurrentNewspapers(response.data.slice(-3));
  }

  return (
    <div className='HomePage'>
      <div className='content'>
        <h1>Բարի գալուստ</h1>
        <p><b>Սիրելի՛ ընթերցողներ.</b></p>
        <p>Բացելով էլեկտրոնային այս կայքը` նպատակ ունենք թերթի միջոցով նպաստել Հայաստանում և Հայաստանից դուրս` արտասահմանում գտնվող մեր հավատացյալ եղբայրների ու քույրերի, ընդհանրապես հայ ժողովրդի հոգևոր շինությանը: Մենք գիտենք, որ արտասահմանում գտնվող յուրաքանչյուր հայ կարիք ունի իմանալու և մեծ հետաքրքրասիրությամբ ուզում է իմանալ Հայաստանի ԱՀՔ եկեղեցում տեղի ունեցող անցուդարձի մասին: Մենք տպագրում ենք «Բարի լուր» թերթը և անվճար ուղարկում Հայաստանից դուրս` Ռուսաստան, Եվրոպա, Ամերիկա: Սիրելի' ընթերցողներ, խնդրում ենք աղոթել թերթի համար, որպեսզի այն ծառայի մեր ժողովրդի ապաշխարությանն ու հոգևոր արթնությանը:</p>
      </div>

      <CurrentNewspapers currentNewspapers={currentNewspapers} />
    </div>
  )
}