import './PageView.css'
import LinksForm from '../LinksForm/LinksForm'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { updatePage } from '../../reducers/pagesReducer'
import { useDispatch } from 'react-redux'
import NewLinksForm from '../NewLinkForm/NewLinkForm'

const PageView = props => {
    const { path } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const page = useSelector(state => state.find(n => n.path === path))
    const [tempPage, setTempPage] = useState()

    useEffect(() => {
        setTempPage(page)
    }, [page])

    

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(updatePage({ prev: page, new: tempPage }))
        navigate(`/${tempPage.path}`) //FIXME
    }

    const handleInput = (type) => (event) => { //event.target.value
        setTempPage({
            ...tempPage,
            [type]: event.target.value
        })
    }

    const handleLinkUpdate = link => {
        console.log('link', link)
        setTempPage({
            ...tempPage,
            links: tempPage.links.map(n => n.id === link.id ? link : n)
        })
    }

    const handleLinkPost = link => {
        setTempPage({
            ...tempPage,
            links: tempPage.links.concat(link)
        })
    }


    if(!tempPage) return <div>Loading...</div>;
    return (
        <div className="pageView">
            <form onSubmit={handleSubmit}>
                <label>path: </label>
                <input className='textInput' value={tempPage.path} onChange={handleInput('path')}/>
                <label>title: </label>
                <input className='textInput' value={tempPage.title} onChange={handleInput('title')}/>
                <label>text: </label>
                <textarea value={tempPage.text} onChange={handleInput('text')}/>
            
                {tempPage.links && tempPage.links.map(link => 
                       <LinksForm key={link.id} link={link} handleLinkUpdate={handleLinkUpdate} /> 
                )}

                <NewLinksForm handleLinkPost={handleLinkPost}/> 
                <input type='submit' />
            </form>
        </div>
    )
}

export default PageView