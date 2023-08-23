import React from 'react'
import { CardCar, CustomFilter, SearchBar, ShowMore } from '.'
import { fetchCars } from '@/utils'
import { FilterProps } from '@/types'
import { fuels, yearsOfProduction } from '@/constans';

interface searchProps {
  searchParams: FilterProps;
}

const Search = async ({ searchParams }: searchProps) => {

  const allCars = await fetchCars(
    {
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || "",
      limit: searchParams.limit || 10,
      model: searchParams.model || ""
    }
  );



  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <>
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container home__filter-container-animation">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars.map((car) => (
                  <CardCar car={car} />
                ))}
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">
                oops,no results
              </h2>
              <p>{allCars?.message}</p>
            </div>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Search