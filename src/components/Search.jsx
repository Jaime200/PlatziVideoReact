import React from 'react'
import { connect } from 'react-redux'
import { searchVideo } from '../actions'
import classNames from 'classnames'
import '../assets/styles/components/Search.scss'
const Search = (props) =>{
  const { isHome } = props
  const inputStyle = classNames('input',{
    isHome
  });

  const handleOnchange = e =>{    
    props.searchVideo(e.target.value)
  }
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" onChange={handleOnchange} className={inputStyle} placeholder="Buscar..."/>
    </section>
)}

const mapDispacthToProps = {
  searchVideo
}

const mapStateToProps = state =>{
  
  return {
      search: state.search
  };
};

export default connect(mapStateToProps,mapDispacthToProps)(Search)