import React, {useState, useEffect} from 'react';

function MyButton(props) {
    console.log('the props received in the child are:', props)
    // props are readonly, they can't be changed'

    const setButtonClasses = () => {
        if(props.color == 'red'){
            return 'bg-red-500 py-2 px-3 text-white rounded'
        } else if(props.color == 'green'){
            return 'bg-green-500 py-2 px-3 text-white rounded'
        } else {
            return 'bg-blue-500 py-2 px-3 text-white rounded'
        }
    };

    return (
        <>

            <button onClick={() => props.parentFunction({firstName: 'Jane'})} className={setButtonClasses()}>{props.txt}</button>

        </>
    );
}

export default MyButton;
