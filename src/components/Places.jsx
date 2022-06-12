import React from "react";

const Places = (props) => {

  //передаем массив городов/мест и фильтруем по айди
  const removePlace = (placesArr, eventPlace) => {
    //фильтр возвращает новый массив отфильтрованный по условию
    //по сути удалем из массива пост с айди переданным постом
    // props.setNewPlaces(placesArr.filter((p) => p.zip !== eventPlace.zip));
    let newPlacesArr = placesArr.filter((p) => p.zip !== eventPlace.zip)
    props.setNewPlaces(newPlacesArr)
    props.setLocalStore('newPlaces', newPlacesArr)

  };

  return (
    <div className="sities">
      <nav className="bt-places">
        {props.startPlases.map((place, index) => {
          return (
            <div key={Math.random() + 'add'} className={place.add ? "addBlock" : ''}>
              <button className='btn btn-primary'
                key={index}
                onClick={(event) => {
                  props.setCurrentPlace(place.name)
                }}
              >
                {place.name}

              </button>
              {place.add ?
                <button key={'del' + index} className="delPlace btn btn-danger"
                  onClick={() => {
                    removePlace(props.newPlaces, place)
                    // props.setLocalStore('newPlaces', props.places)
                  }}><span>del</span></button>
                : false}
            </div>

          );
        })}
      </nav>
    </div >
  );
};

export default Places;
