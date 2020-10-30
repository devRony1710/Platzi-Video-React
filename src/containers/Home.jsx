import React from 'react';

//Custom Hooks
import useInitialState from '../hooks/useInitialState';

// Components
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

//Styles
import '../assets/styles/App.scss';

// API
const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Search />

      {initialState.mylist.lenght === 0 ? (
        <Categories title='Mi lista'>
          <h3>Your List is Empty</h3>
        </Categories>
      ) : (
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

    </>
  );
};

export default Home;
