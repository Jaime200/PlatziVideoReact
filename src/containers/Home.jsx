import React,{ useState, useEffect  } from 'react';
import  { connect  } from 'react-redux'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';
//const API = 'http://localhost:3000/initialState/'
const Home = ({ myList, trends, originals }) =>{
   
    return (
        <>           
            <Search />           
            {myList !==undefined &&  myList.length > 0 &&
            <Categories  title="Mi lista">
                <Carousel>
                    { myList.map(item =>{
                        return <CarouselItem 
                        key={item.id} 
                        {...item }
                        isList
                        />           
                        })
                    }                
                </Carousel>
            </Categories>
           }
            <Categories title="Tendencias" >
            <Carousel >
                {trends !==undefined &&  trends.length > 0 && 
                trends.map(item =>{
                    console.log(item);
                    return <CarouselItem key={item.id} {...item }/>                    
                    })
                }                                
                </Carousel>
            </Categories>
            <Categories  title="Originales de Platzi vídeo">
                <Carousel>
                    {originals !==undefined &&  originals.length > 0 && 
                    originals.map(item =>{
                        return <CarouselItem key={item.id} {...item }/>           
                        })
                    }                    
                </Carousel>
            </Categories>
        </>
        );
}

const mapStateToProps = state =>{
    console.log(state.originals);
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    };
};
export default connect(mapStateToProps, null)(Home)