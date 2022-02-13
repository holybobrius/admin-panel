import './PageView.css'
import LinksForm from '../LinksForm/LinksForm'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { updatePage } from '../../reducers/pagesReducer'
import { useDispatch } from 'react-redux'
import NewLinksForm from '../NewLinkForm/NewLinkForm'
import dataServices from '../../services/dataServices'

const PageView = props => {
    const { path } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const page = useSelector(state => state.find(n => n.path === path))
    const pages = useSelector(state => state)
    const [tempPage, setTempPage] = useState()

    useEffect(() => {
        setTempPage(page)
    }, [page])

    

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(updatePage({ prev: page, new: tempPage }))
        navigate(`/${tempPage.path}`)
        dataServices.postData(pages) //FIXME
    }

    const handleInput = (type) => (event) => { //event.target.value
        setTempPage({
            ...tempPage,
            [type]: event.target.value
        })
    }

    const handleLinkUpdate = ({ oldLink, link })=> {
        console.log('link', link)
        setTempPage({
            ...tempPage,
            text: tempPage.text.replace(`[${oldLink.id}]`, `[${link.id}]`),
            links: tempPage.links.map(n => n.id === oldLink.id ? link : n)
        })
    }

    const handleLinkPost = link => {
        setTempPage({
            ...tempPage,
            links: tempPage.links.concat(link)
        })
    }


    const createLink = () => {
        if(window.getSelection().toString() !== '') {
            const newLink = {
                id: `link${tempPage.links.length}`,
                text: window.getSelection().toString(),
                href: '',
                router: false
            }
            setTempPage({
                ...tempPage,
                text: tempPage.text.replace(window.getSelection().toString(), `[${`link${tempPage.links.length}`}]`),
                links: tempPage.links.concat(newLink)
            })
        }
    }


    if(!tempPage) return <div>Loading...</div>;
    return (
        <div className="pageView">
            <form className={'pageForm'} onSubmit={handleSubmit}>
                <div className='topInputs'>
                    <div>
                        <label>path: </label>
                        <input className='textInput' value={tempPage.path} onChange={handleInput('path')}/>
                    </div>
                    <div>
                        <label>title: </label>
                        <input className='textInput' value={tempPage.title} onChange={handleInput('title')}/>
                    </div>
                </div>
                <label><div className='textareaLabel'>text: <button className='addLinkButton' onClick={createLink}>&#128279;</button></div></label>
                <textarea id='text' value={tempPage.text} onChange={handleInput('text')}/>
            
                {tempPage.links && tempPage.links.map(link => 
                       <LinksForm key={link.id} link={link} handleLinkUpdate={handleLinkUpdate} /> 
                )}

                <NewLinksForm handleLinkPost={handleLinkPost}/> 
                <input type='submit' className='submitForm'/>
            </form>
        </div>
    )
}

export default PageView