import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './mymap.css'


const MyMap = (props) => {
    // console.log(props);


    return (
        <div className='container'>
            <MapContainer MapContainer center={props.position} zoom={12} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.position}>
                    <Popup>

                    </Popup>
                </Marker>
            </MapContainer >
        </div>

    )
}

export default MyMap




