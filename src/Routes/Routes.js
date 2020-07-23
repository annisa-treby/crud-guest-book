import React from "react"
import { Switch, Route } from "react-router-dom"
import GuestBook from "../GuestBook/GuestBook"
import GuestBookForm from "../GuestBook/GuestBookForm";
import GuestBookTable from "../GuestBook/GuestBookTable";

function Routes(){
    return (
       
        <Switch>
            <Route path="/guests" render={()=> <GuestBook/>}/>
            <Route path="/guests/form" exact strict render={()=>
                <GuestBookForm/>}/>
            <Route path="/guests/table" exact strict render={()=>
                <GuestBookTable/>}/>
        </Switch>
       
    );
}

export default Routes