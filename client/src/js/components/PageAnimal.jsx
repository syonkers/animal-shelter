import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAnimals } from '../actions/actionAnimal';
import { AnimalType } from '../types/typeAnimal';
import Animal from './Animal';

type Props = {
  animals: Array<AnimalType>,
  fetchAnimals: Function
};

const AnimalPage = (props: Props) => {
  const { fetchAnimals, animals } = props;



  useEffect(() => {
    fetchAnimals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAnimals = () => {
    return animals.map(animal => 
      <Animal key={animal.id} animal={animal} />
    );
  }

  return (
    <div className="animal-list">
        {renderAnimals()}  
    </div>
  );
}

const mapStateToProps = state => ({
  animals: state.animal.animals
});

export default connect(mapStateToProps, { fetchAnimals })(AnimalPage);
