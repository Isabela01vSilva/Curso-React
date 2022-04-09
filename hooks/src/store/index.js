import reducer from './reduceres'
import { numberAdd2 } from './action/number'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

export {
    reducer,
    initialState
}
