const ADD_ORDER = "ADD_ORDER"

let initialState = {
    orders: [
        {
            number: 6,
            date: new Date(2021, 5, 27),
            price: "2 000",
            card: "6****4",
            img: "https://picsum.photos/seed/1/200"
        },
        {
            number: 5,
            date: new Date(2021, 5, 27),
            price: "2 500",
            card: "6****4",
            img: "https://picsum.photos/seed/2/200"
        },
        {
            number: 4,
            date: new Date(2021, 5, 26),
            price: "2 000",
            card: "6****4",
            img: "https://picsum.photos/seed/3/200"
        },
        {
            number: 3,
            date: new Date(2021, 5, 25),
            price: "1 200",
            card: "6****4",
            img: "https://picsum.photos/seed/4/200"
        },
        {
            number: 2,
            date: new Date(2021, 5, 24),
            price: "2 050",
            card: "7****2",
            img: "https://picsum.photos/seed/5/200"
        },
        {
            number: 1,
            date: new Date(2021, 5, 24),
            price: "700",
            card: "7****2",
            img: "https://picsum.photos/seed/6/200"
        },

    ]
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state, orders: [...state.orders, action.newOrder]
            }
        default:
            return state
    }
}

export const addOrder = (newOrder) => ({type: ADD_ORDER, newOrder})

export default main