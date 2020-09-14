import React from 'react'
import '../assets/styles/components/NotFound.scss'
import notFound from '../assets/static/404.png'
const NotFound = () =>(
    <div className="ContainerNotFound">
            <img src={notFound}  alt=""/>
    </div>
)

export default NotFound