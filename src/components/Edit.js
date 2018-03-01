import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Edit = (props) => {
    console.log(props);
    return (
        <p>Edit {props.match.params.id}</p>
    )
}


export default Edit;