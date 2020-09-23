import React, {  useState  } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { NotFound } from './NotFound'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'
const Player = (props)=>{
    const { id } = props.match.params
    const [loading,  setLoading] = useState(true);
    const hasPlaying = Object.keys(props.playing).length > 0 
    console.log(props.playing);
    console.log(hasPlaying);
    useState ( ()=>{
        props.getVideoSource(id);
        setLoading(false);
    },[])
    if(loading){
        return <h1>Cargando...</h1>
    }
    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"></source>
            </video>
            <div className="Player-back">
                <button type="button" onClick={()=>props.history.goBack()} > Regresar </button>
            </div>
        </div>
    ) :  <NotFound />
}

const mapStateToProps = (state)=>{
    return {
        playing: state.playing
    }
}

const mapDispatchToProps ={
    getVideoSource,
}
export default connect(mapStateToProps,mapDispatchToProps)(Player)

