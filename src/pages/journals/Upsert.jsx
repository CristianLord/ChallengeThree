import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {createJournal, getJournal, updateJournal} from '../../Api/services/JournalService'

function Upsert() {

  let { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)

  useEffect(() => {
    
    //Gets the journal if the user wants to update it.
    async function getUserJournal(){
      const response = await getJournal(id)
      if(response.status === 200){
        setTitle(response.data.title)
        setFile(response.data.file)
      } 
    }

    if(id){
      getUserJournal();
    }
    
  }, [id])
  
  /**
   * Sends the journal to the journal service.
   */
  async function sendJournal(event){
    event.preventDefault();
    let response = null;
    if(id){
      response = await updateJournal({id, title, idUser:1, file});
    }else{
      response = await createJournal({title, idUser:1, file});
    }
    if(response.status === 200) console.log(response.data)
  }

  return (
    <>
      <h1>{(id) ? 'Edit' : 'Create'}</h1>
      <h4>Journal</h4>
      <hr />
      <div className="row">
          <div className="col-md-4">
              <form onSubmit={sendJournal} encType="multipart/form-data">
                  <div className="form-group">
                      <label htmlFor="title" className="control-label">Title</label>
                      <input onChange={({target}) => setTitle(target.value)} 
                        value={title}
                        className="form-control" 
                        placeholder="Title"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="File" className="control-label">File</label>
                      <input onChange={({target}) => setFile(target.files[0])} className="form-control" type="file" accept="application/pdf" />
                  </div>
                  <div className="form-group">
                      <button disabled={
                        (id) ? (!title) : (!(file && title))} 
                        type="submit" 
                        className="btn btn-primary">Save</button>
                  </div>
              </form>
          </div>
      </div>
      <Link onClick={() => navigate(-1)}>Back</Link>
    </>
  )
}

export default Upsert