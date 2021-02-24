import React from 'react';
import { AnimalType } from '../types/typeAnimal';
import messages from '../constants/messages';


type Props = {
    animal: AnimalType,
    tags: Array<string>
};

const Animal = (props: Props) => {
    const { animal } = props;
    return (
        <div className="animal">
            <div className="animal-details">
                <img
                className="animal-avatar"
                src={animal.image}
                alt={`${animal.name}`}
                />
                <div className="animal-content">
                    <h2 className="animal-name">{`${animal.name}`}</h2>
                    <div className="animal-inner">
                        <ul className="animal-items">
                            <li className="animal-list-item">{`${messages.type}: ${animal.type}`}</li>
                            <li className="animal-list-item">{`${messages.age}: ${animal.age}`}</li>
                            <li className="animal-list-item">{`${messages.gender}: ${animal.sex}`}</li>
                        </ul>
                    </div>
                </div>

            </div>
      </div>
      
    );
};

export default Animal;