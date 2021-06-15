import { gql } from "@apollo/client"


export const loadCategory = (category) => gql `
          query{
    category(input:{title:"clothes"}){
     name
    products{
      name
      inStock
      prices{
        currency
        amount
      }
      gallery
    		}
    	}
    }
        `