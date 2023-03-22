import { GET_ALL_COUNTRIES,
        ORDER_BY_AZ,
        ORDER_BY_POPULATION,
        SEARCH_BY_NAME,
        GET_ACTIVITIES,
        FILTER_BY_ACTIVITY,
        GET_COUNTRY_BY_ID,
        CREATE_ACTIVITY
       } from "../actions";

let reduxStore = {
    countries : [],
    filtered : [],
    activity : [],
    detail : {},
    filterActivity : [],
    e404 : true
}

export const reducer = (state = reduxStore , {type,payload}) => {
    switch (type) {
        case GET_ALL_COUNTRIES:

            return {
                ...state,
                detail : {},
                countries : (state.countries = payload)
            }            

        case ORDER_BY_AZ:

            let countries = [...state.filtered.length > 0 ? state.filtered : state.countries]
            let aux;

            if(payload === 'A-Z'){
                aux = countries.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  });
            }

            if(!payload) return state

            if(payload === 'Z-A'){
                aux = countries.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  });
                aux.reverse();
            }

          if(state.filtered.length > 0) {
            console.log('llega az')
            return {
              ...state,
              filtered: aux,
            };
          }

        return {
            ...state,
            countries : state.countries = aux
        }

        case ORDER_BY_POPULATION:

        let countries2 = [...state.filtered.length > 0 ? state.filtered : state.countries]
        let help;

        if (payload === "menor") {

          help = countries2.sort((a, b) => a.population - b.population);

        } else if (payload === "mayor") {
    
          help = countries2.sort((a, b) => b.population - a.population);

        }

        if (!payload) return state;
        
        if(state.filtered.length > 0) {
          return {
            ...state,
            filtered: help,
          };
        }

        return {
          ...state,
          countries: help,
        };

        case SEARCH_BY_NAME:

          let data = [...state.countries]
          // eslint-disable-next-line
          let result = data.filter((el) => {
            if(el.name.toLowerCase().includes(payload.toLowerCase()))
            return el
          }) 

          if(!payload) return state
      
          if(!result) return {...state, e404 : false}

          return {
            ...state,
            filtered : result,
          }

        case GET_ACTIVITIES:

        

        return {
          ...state,
          activity : (state.activity = payload)
        }

        case FILTER_BY_ACTIVITY:
        
        if(payload == 'clean'){
          return {
            ...state,
            filterActivity : []
          }
        }

        return {
          ...state,
          filterActivity : [...payload]
        }

        case GET_COUNTRY_BY_ID:

        return {
          ...state,
          detail : payload
        }

        case CREATE_ACTIVITY:
          console.log(payload)
          return {
            ...state
          }
          
        default:
            return state
    }
 }