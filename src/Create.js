import { useState } from "react";


const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Admin')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {title, body, author}

        setIsPending(true)

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New Blog Added Successfully !')
            setIsPending(false)
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label htmlFor="">Blog Title :</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />

                <label htmlFor="">Blog Body :</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
                >
                </textarea>
                <label htmlFor="">Blog Author :</label>

                <select
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="Mario">Mario</option>
                    <option value="Erin">Erin</option>
                    <option value="Admin">Admin</option>
                </select>
                
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}                
                
            </form>
        </div>
    );
}
 
export default Create;