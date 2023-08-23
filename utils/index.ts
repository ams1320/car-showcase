import { CarProps, FilterProps } from "@/types";

export const updateSearchParams=(type:string,value:string)=>{
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type,value)
    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`


    return newPathname;
}

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, fuel, limit, model } = filters;

    const headers = {
        'X-RapidAPI-Key': 'a31c409b8bmsh12ae17818b22dd8p1b8275jsnb7d47143a8da',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
 try {
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers });
    const result = await response.json();
    return result;
 } catch (error:any) {
    console.log(error.message)
 }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCardImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

