import React, { Component } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default class MapTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: this.props.position
        };
        // this.tick = this.tick.bind(this);
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.position !== prevProps.position) {
            this.setState({ position: this.props.position })
        }
    }

    // tick(newPosition) {
    //     this.setState({
    //         position: newPosition
    //     });
    // }

    render() {

        const position = this.props.position
        console.log(position);

        return (
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }
}