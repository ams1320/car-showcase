"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '.'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit'
    className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src='/magnifying-glass.svg'
      alt='magnifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = () => {

  const [manufacturer, SetManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return alert('Please fill the search bar')
    }

    updateSearchParams( manufacturer.toLowerCase(),model.toLowerCase())
  }

  const updateSearchParams = (manufacturer: string, model: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model')
    }

    if (manufacturer) {
      console.log( "fhffldl",manufacturer)
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }


  return (
    <>
      <form className="searchbar home__filter-container-animation" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            SetManufacturer={SetManufacturer} />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <div className="searchbar__item">
          <Image src="/model-icon.png"
            alt='model icon'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
          />
          <input type="text" name='model' value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder='tiguan'
            className='searchbar__input'
          />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <SearchButton otherClasses='max-sm:hidden' />
      </form>
    </>
  )
}

export default SearchBar