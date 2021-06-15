import { CategoryActionTypes } from "./category_types";
const initState = {

    category: {

        name: "tech",
        items: [{
                "name": "PlayStation 5",
                "inStock": false,
                "prices": [{
                        "currency": "USD",
                        "amount": 844.02
                    },
                    {
                        "currency": "GBP",
                        "amount": 606.67
                    },
                    {
                        "currency": "AUD",
                        "amount": 1088.79
                    },
                    {
                        "currency": "JPY",
                        "amount": 91147.25
                    },
                    {
                        "currency": "RUB",
                        "amount": 63826.91
                    }
                ],
                "gallery": [
                    "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
                ]
            },
            {
                "name": "Xbox Series S 512GB",
                "inStock": false,
                "prices": [{
                        "currency": "USD",
                        "amount": 333.99
                    },
                    {
                        "currency": "GBP",
                        "amount": 240.07
                    },
                    {
                        "currency": "AUD",
                        "amount": 430.85
                    },
                    {
                        "currency": "JPY",
                        "amount": 36068.27
                    },
                    {
                        "currency": "RUB",
                        "amount": 25257.22
                    }
                ],
                "gallery": [
                    "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg"
                ]
            },
            {
                "name": "iMac 2021",
                "inStock": true,
                "prices": [{
                        "currency": "USD",
                        "amount": 1688.03
                    },
                    {
                        "currency": "GBP",
                        "amount": 1213.34
                    },
                    {
                        "currency": "AUD",
                        "amount": 2177.57
                    },
                    {
                        "currency": "JPY",
                        "amount": 182294.51
                    },
                    {
                        "currency": "RUB",
                        "amount": 127653.82
                    }
                ],
                "gallery": [
                    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000"
                ]
            },
            {
                "name": "iPhone 12 Pro",
                "inStock": true,
                "prices": [{
                        "currency": "USD",
                        "amount": 1000.76
                    },
                    {
                        "currency": "GBP",
                        "amount": 719.34
                    },
                    {
                        "currency": "AUD",
                        "amount": 1290.99
                    },
                    {
                        "currency": "JPY",
                        "amount": 108074.6
                    },
                    {
                        "currency": "RUB",
                        "amount": 75680.48
                    }
                ],
                "gallery": [
                    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
                ]
            },
            {
                "name": "AirPods Pro",
                "inStock": false,
                "prices": [{
                        "currency": "USD",
                        "amount": 300.23
                    },
                    {
                        "currency": "GBP",
                        "amount": 215.8
                    },
                    {
                        "currency": "AUD",
                        "amount": 387.3
                    },
                    {
                        "currency": "JPY",
                        "amount": 32422.38
                    },
                    {
                        "currency": "RUB",
                        "amount": 22704.14
                    }
                ],
                "gallery": [
                    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000"
                ]
            },
            {
                "name": "AirTag",
                "inStock": true,
                "prices": [{
                        "currency": "USD",
                        "amount": 120.57
                    },
                    {
                        "currency": "GBP",
                        "amount": 86.67
                    },
                    {
                        "currency": "AUD",
                        "amount": 155.54
                    },
                    {
                        "currency": "JPY",
                        "amount": 13021.04
                    },
                    {
                        "currency": "RUB",
                        "amount": 9118.13
                    }
                ],
                "gallery": [
                    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000"
                ]
            },

        ]
    },

}
const categoryReducer = (state = initState, action) => {

    switch (action.type) {

        case "load":
            {

                return {
                    ...state
                }
            }


    }
    return state;
}
export default categoryReducer