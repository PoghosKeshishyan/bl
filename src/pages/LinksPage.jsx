import '../css/LinksPage.css';

export function LinksPage() {
    return (
        <div className='LinksPage'>
            <a 
              href='http://barilur.org/bible/' 
              rel="noopener noreferrer"
              target='_blank' 
            >
                Հայերեն Աստվածաշունչ
            </a>
            
            <p> 
                Ամսաթերթի անգլերեն տարբերակը 
                <a 
                  href='./journals/tert-english-12-2022.pdf' 
                  rel="noopener noreferrer"
                  target='_blank'
                >
                    Համար 1
                </a>
            </p>
        </div>
    )
}
