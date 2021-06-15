import { gql } from "@apollo/client"


export const loadCategory = (category) => gql `
          query{
    category(input:{title:"tech"}){
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