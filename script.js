const countries = [
    {
      city: "London",
      code: "UK",
      population: 11504632,
      foodRanking: 4
    },
    {
      city: "Manchester",
      code: "UK",
      population: 4280424,
      foodRanking: 5
    },
    {
      city: "Paris",
      code: "FR",
      population: 10830024,
      foodRanking: 9
    },
    {
      city: "Nice",
      code: "FR",
      population: 4250024,
      foodRanking: 10
    },
    {
      city: "Berlin",
      code: "DE",
      population: 8250024,
      foodRanking: 8
    },
    {
      city: "Munich",
      code: "DE",
      population: 5250050,
      foodRanking: 6
    }
  ];

  let allCity = document.querySelector("#allCities")
  let goodFoodCity = document.querySelector("#citiesForFoodies")
  let populationCity = document.querySelector("#sortedByPopulation")

//all the cities
  countries.forEach(e =>{
      
    let cityList = document.createElement("li")
    cityList.innerText= e.city
    allCity.appendChild(cityList)
    
    if(e.code === "FR"){
        cityList.style.color="blue"
    }else if(e.code === "UK"){
        cityList.style.color="red"
    }
     
})
//foodrating
let goodFoodPlaces = countries.filter(city => city.foodRanking >= 8)

goodFoodPlaces.sort((a,b)=>{
   return b.foodRanking - a.foodRanking
})

goodFoodPlaces.forEach(e =>{
    let foodList = document.createElement("li")
    foodList.innerText = e.city + " " + e.foodRanking
    goodFoodCity.appendChild(foodList)
})


//population


let populationSorted = countries.sort((a,b)=>{
    return b.population -a.population
})
countries.forEach(e=>{
    let population = document.createElement("li")
    population.innerText= "I "+e.city + " bor det " + e.population + "st människor"
    populationCity.appendChild(population)
})
