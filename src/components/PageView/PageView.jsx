import './PageView.css'
import LinksForm from '../LinksForm/LinksForm'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { updatePage } from '../../reducers/pagesReducer'
import { useDispatch } from 'react-redux'

const PageView = props => {
    const { path } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const page = useSelector(state => state.find(n => n.path === path))

    const handleSubmit = event => {
        event.preventDefault();
        props.handlePageUpdate();
    }

    const handleInput = (type) => (event) => { //event.target.value
        dispatch(updatePage({
            ...page,
            [type]: event.target.value
        }))
    }

    const handleLinkUpdate = link => {
        dispatch(updatePage({
            ...page,
            links: page.links.map(n => n.id === link.id ? link : n)
        }))
        setImmediate(() => navigate(`/${path}`)) //FIXME
    }

    if(!page) return <div>Loading...</div>;
    return (
        <div className="pageView">
            <form onSubmit={handleSubmit}>
                <label>path: </label>
                <input className='textInput' value={page.path} onChange={handleInput('path')}/>
                <label>title: </label>
                <input className='textInput' value={page.title} onChange={handleInput('title')}/>
                <label>text: </label>
                <textarea value={page.text} onChange={handleInput('text')}/>
            
                {page.links && page.links.map(link => 
                       <LinksForm key={link.id} link={link} handleLinkUpdate={handleLinkUpdate} /> 
                )}

                <LinksForm /> 
                <input type='submit' />
            </form>
        </div>
    )
}

export default PageView