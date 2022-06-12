import React, { useState } from 'react'
import PostServis from '../PostService';
import './search.css'

const Search = (props) => {
    // console.log(props.props["place"]);
    // console.log(props.props["newPlace"]);

    const [value, setValue] = useState("Enter city...");
    const [error, setError] = useState(null)

    function submitHandler(event) {
        event.preventDefault();
        findTown(value)
        setValue("Enter city...")
    }

    function findTown(name) {
        if (name.trim()) {
            const findTown = PostServis.getTownFind(name.trim())
                .then((data) => {
                    if (data) {
                        setError(null)
                    }

                    props.setCurrentPlace(value.trim())

                    let allDataTowm = data
                    // console.log(allDataTowm);

                    let towninfo = {
                        name: data.name,
                        zip: data.id,
                        lon: data.coord.lon,
                        lat: data.coord.lat,
                        add: true
                    }
                    let newPlacesArr = [...props.newPlaces, towninfo]
                    props.setNewPlaces(newPlacesArr)
                    props.setLocalStore('newPlaces', newPlacesArr)
                    return allDataTowm
                })
                .catch(err => {
                    // what now?
                    //https://medium.com/nuances-of-programming/%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA-api-%D0%B2-%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-axios-932e9d66a526
                    // console.log(err.response.data.cod);
                    // console.log(err.response.data.message);
                    if (err.response.data.cod === "404") {
                        setError(err.response.data.message)
                        setValue("Enter city...")
                    } else {
                        setValue("Enter city...")
                        setError(null)
                    }
                })
            setValue("Enter city...");
        }
    }

    return (
        <div className=' container navbar navbar-expand-lg navbar-light bg-light navbarS '>
            <form className='d-flex' onSubmit={submitHandler}>
                <input className='form-control me-sm-2' value={value}
                    onFocus={(event) => (event.target.value = "")}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
                <button className='btn btn-secondary my-2 my-sm-0'
                    type="submit"
                    onClick={() => {
                        // setValue("Enter city...")
                    }}>Search</button>
            </form>
            {error ? <h3 style={{ color: 'red' }} >{error}</h3> : false}
        </div >
    )
}

export default Search


