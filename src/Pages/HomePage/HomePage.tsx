import { useState, useMemo, useCallback } from 'react'
import { useTunes } from 'API/calls'
import { ITunesRecord } from 'Types/itunes'

export const HomePage = () => {
  const [searchString, setSearchString] = useState('')
  const { isLoading, isError, data: tunesData } = useTunes()

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  const renderRecords = useCallback((records?: Array<ITunesRecord>) => {
    if (!records || !records?.length) return <p>No records found</p>
    return records?.map((e) => (
      <div key={e.id.attributes['im:id']}>
        <p className="select-none">{e.title.label}</p>
      </div>
    ))
  }, [])

  const filteredRecords = useMemo(() => {
    let records: Array<ITunesRecord> | undefined = []
    const feed = tunesData?.data.feed.entry
    records = !searchString
      ? feed
      : feed?.filter((r) =>
          r.title.label
            .toLocaleLowerCase()
            .includes(searchString.toLocaleLowerCase())
        )
    return renderRecords(records)
  }, [searchString, tunesData, renderRecords])

  return (
    <main className="mx-auto mb-6 grid min-w-fit grid-cols-1 justify-center overflow-hidden px-2 lg:px-16">
      <h1 className="w-full py-5 text-center text-3xl">
        iTunes Store: Top Albums
      </h1>
      <div className="w-full">
        <input
          type="text"
          data-testid="textbox"
          value={searchString}
          onChange={handleSearchInputChange}
          className="mb-6 w-full drop-shadow-lg"
          placeholder="Filter tunes..."
        />
      </div>
      {isError && <p>Sorry, there has been an error.</p>}
      {isLoading && <p>Loading tunes...</p>}
      {!isError && !isLoading && filteredRecords}
    </main>
  )
}
