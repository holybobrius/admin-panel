import './NewPageView.css'
import LinksForm from '../LinksForm/LinksForm'
import { useState } from 'react/cjs/react.development'
import { useDispatch } from 'react-redux'
import { updatePage } from '../../reducers/pagesReducer'

const PageView = props => {

    const dispatch = useDispatch();
    const [tempPage, setTempPage] = useState({
        path: '',
        title: '',
        text: '',
        links: []
    })

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

    const handleSubmit = event => {
        event.preventDefault();
        // dispatch(postPage());
    }

    return (
        <div className="pageView">
            <form onSubmit={handleSubmit}>
                <label>path: </label>
                <input className='textInput' value={tempPage.path} onChange={handleInput('path')} />
                <label>title: </label>
                <input className='textInput' value={tempPage.title} onChange={handleInput('title')} />
                <label>text: </label>
                <textarea value={tempPage.text} onChange={handleInput('text')} />

                {tempPage.links && tempPage.links.map(link => 
                       <LinksForm key={link.id} link={link} handleLinkUpdate={handleLinkUpdate}/> 
                )}
                <LinksForm />
                <input type='submit' />
            </form>
        </div>
    )
}

export default PageView