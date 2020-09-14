import React,{ useState, useEffect  } from 'react';
import Header from  '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'
const API = 'http://localhost:3000/initialState/'
const Home = () =>{
    const initialState = useInitialState(API);
    return (
        <>            
            <Search />           
            {initialState.mylist !==undefined &&  initialState.mylist.length > 0 &&
            <Categories  title="Mi lista">
                <Carousel>
                    { initialState.mylist.map(item =>{
                        return <CarouselItem key={item.id} {...item }/>           
                        })
                    }                
                </Carousel>
            </Categories>
           }
            <Categories title="Tendencias" >
            <Carousel >
                {initialState.trends !==undefined &&  initialState.trends.length > 0 && initialState.trends.map(item =>{
                    console.log(item);
                    return <CarouselItem key={item.id} {...item }/>                    
                    })
                }                                
                </Carousel>
            </Categories>
            <Categories  title="Originales de Platzi vídeo">
                <Carousel>
                    {initialState.originals !==undefined &&  initialState.originals.length > 0 && initialState.originals.map(item =>{
                        return <CarouselItem key={item.id} {...item }/>           
                        })
                    }                    
                </Carousel>
            </Categories>
        </>
        );
}

export default Home;