import {useState,useEffect} from "react"
import api from "../api"
import Note from "../components/Note"
import "../styles/Home.css"

export default function Home(){
    const[notes,setNotes]=useState([]);
    const [content , setContent]=useState("")
    const[title,setTitle]=useState("")
    useEffect(()=>{
        getNotes();
    },[])
    const getNotes=()=>{
        api
            .get("/api/notes/")//sending request to backend
            .then((res)=>res.data)//getting response from the backend and extract the data only 
            .then((data)=>{setNotes(data);console.log(data)})//set that data to the components state,this triggers a rerender to show up the updated data on the page
            .catch((err)=>alert(err));//to catch error during sending request
    }
    const deleteNote=(id)=>{
        api
        .delete(`/api/notes/delete/${id}/`)
        .then((res)=>{
            if(res.status===204) alert("Note deleted!")
            else alert("failed to delete note")
            getNotes();
        })
        .catch((error)=>alert(error));
        
    };
    const createNote=(e)=>{
        e.preventDefault()
        api
        .post("/api/notes/",{content,title}) //sending the list of content and title to the backend  and posting it there 
        .then((res)=>{
            if(res.status===201) alert("Note created")
            else alert("failed to make note")
            getNotes();
        
        })
        .catch((err)=>alert(err));
        
    }

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}