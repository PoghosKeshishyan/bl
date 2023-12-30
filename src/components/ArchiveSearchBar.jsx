export function ArchiveSearchBar({
    years,
    onChangeSelect,
    submitHandler,
    serachInput,
    setSearchInput }) {
    return (
        <div className="ArchiveSearchBar">
            <div className='selectYear'>
                <span>Տարեթիվը</span>

                <select onChange={onChangeSelect}>
                    {
                        years.map((year, index) => <option value={year} key={index}>
                            {year} թ.
                        </option>)
                    }
                </select>
            </div>

            <form className='search-container' onSubmit={submitHandler}>
                <input
                    type='text'
                    value={serachInput}
                    placeholder='Որոնում...'
                    onChange={e => setSearchInput(e.target.value)}
                />
                
                <input type='submit' value='Որոնել' />
            </form>
        </div>
    )
}
