import remove from 'lodash.remove';

// Action Types
export const ADD_FOOD_ITEM = 'ADD_FOOD_ITEM';
export const DELETE_FOOD_ITEM = 'DELETE_FOOD_ITEM';

// Action Creators
let itemID = 0;

export function addItems(item) {
    return {
        type: ADD_FOOD_ITEM,
        id: itemID++,
        item
    }
}

export function deleteItems(id) {
    return {
        type: DELETE_FOOD_ITEM,
        payload: id
    }
}

// reducer
const initialState = []

function foodItemReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FOOD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    item: action.item
                }
            ]

        case DELETE_FOOD_ITEM:
            const deletedNewArray = remove(state, obj => {
                return obj.id != action.payload
            })
            return deletedNewArray

        default:
            return state
    }
}

export default foodItemReducer;
