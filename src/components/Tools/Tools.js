
import React from 'react'

const Tools = () => {

    function setLocalStore(name, data) {
        data = JSON.stringify(data);
        localStorage.setItem(name, data);
    }

    function getDataLocalStore(name) {
        if (localStorage.getItem(name)) {
            let data = localStorage.getItem(name)
            data = JSON.parse(data)
            return data
        }
        return []
    }

    return (
        {
            setLocalStore, getDataLocalStore
        }
    )
}

export default Tools




