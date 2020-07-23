
const initialState = {
    keyword:'',
    form : {
        id:'',
        name:'',
        address:'',
    },
    guests :[]
}

function GuestBookReducer(state=initialState, action){
    const {type, payload}=action;

    switch (type) {
        case 'CREATE_GUEST' :
            console.log(payload,' reducer')
            return {...state, guests: state.guests.concat([{...payload}])}

        case  'UPDATE_GUEST' :
            return {...state, guests: state.guests.map((guest)=>guest.id === payload.id ? payload : guest)}

        case 'HANDLE_EDIT' :
            const guest = state.guests.find((guest)=> guest.id === payload)
            return {...state, form: {...guest} }

        case 'HANDLE_DELETE' :
            return {...state, guests: state.guests.filter((guest)=> guest.id !== payload)}

        case 'HANDLE_INPUT_CHANGES':
            const {inputName, inputValue} = payload;
            const form = {...state.form}
            form[inputName]=inputValue;
            return {...state, form: {...form}}

        case 'HANDLE_SEARCH' :
            return {...state, keyword: payload}

        case 'RESET_FORM' :
            return {...state, form: {id:"", name: "", address: ""}}

        default :
            return {...state}
    }
}
export default GuestBookReducer;