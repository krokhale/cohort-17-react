import React, {useState, useEffect} from 'react';

function Item(props) {
    return (
        <>
            <li className={'text-2xl text-green-500'}>{props.txt}</li>
        </>
    );
}

export default Item;
