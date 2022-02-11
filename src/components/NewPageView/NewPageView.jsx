import './NewPageView.css'
import LinksForm from '../LinksForm/LinksForm'
import { useState } from 'react/cjs/react.development'
import { useDispatch } from 'react-redux'
import { postPage } from '../../reducers/pagesReducer'
import NewLinksForm from '../NewLinkForm/NewLinkForm'

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

    const handleLinkUpdate = ({ oldLink, link }) => {
        console.log('link', link)
        setTempPage({
            ...tempPage,
            links: tempPage.links.map(n => n.id === oldLink.id ? link : n)
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(postPage(tempPage));
    }

    const handleLinkPost = link => {
        setTempPage({
            ...tempPage,
            links: tempPage.links.concat(link)
        })
    }

    return (
        <div className="pageView">
            <form onSubmit={handleSubmit} className={'pageForm'}>
                <div className='topInputs'>
                    <div>
                        <label>path: </label>
                        <input className='textInput' value={tempPage.path} onChange={handleInput('path')} />
                    </div>
                    <div>
                        <label>title: </label>
                        <input className='textInput' value={tempPage.title} onChange={handleInput('title')} />
                    </div>
                </div>
                <label>text: </label>
                <textarea value={tempPage.text} onChange={handleInput('text')} />

                {tempPage.links && tempPage.links.map(link => 
                       <LinksForm key={link.id} link={link} handleLinkUpdate={handleLinkUpdate}/> 
                )}
                <NewLinksForm handleLinkPost={handleLinkPost} />
                <input type='submit' className='submitForm' />
            </form>
        </div>
    )
}

export default PageView