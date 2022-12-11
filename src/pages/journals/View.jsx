import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getJournal } from '../../Api/services/JournalService'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Header from '../../components/Header';

function ViewJournal() {

  let { id } = useParams();
  const [journal, setJournal] = useState({});
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {

    async function getFile() {
      const response = await getJournal(id);
      console.log(response)
      if (response.status === 200) setJournal(response.data);
    }

    getFile();
  }, [id])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (

    <div className='conatiner'>
      <Header 
        title={journal.title} 
        button={{ text: 'Edit', link: `/journals/upsert/${journal.id}`, style: 'btn-sm btn-success' }} />
      <Document
        file={(journal.pathFile ? journal.pathFile : '')}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page height={600} pageNumber={pageNumber} />
      </Document>
      <div className="row">
        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
      </div>
      <div className="row">
        <button
          className='btn btn-sm btn-secondary'
          disabled={pageNumber <= 1}
          onClick={previousPage}>
          Previous
        </button>
        <button
          className='btn btn-sm btn-success'
          disabled={pageNumber >= numPages}
          onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ViewJournal