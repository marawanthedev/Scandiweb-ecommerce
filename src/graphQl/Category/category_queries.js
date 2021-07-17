import { gql } from "@apollo/client";
export const GET_PORDUCTS = gql`
  query {
    category {
      products {
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const GET_CURRENCIES =
  gql`
  query {
    category {
      products {
        prices {
          currency
        }
      }
    }
  }`

export const GET_PRODUCTS_Category = gql`
  query($title:String!){
    category(input: { title:$title}) {
      name
      products {
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const GET_TECH_PRODUCTS = gql`
  query {
    category(input: { title: "tech" }) {
      name
      products {
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;
