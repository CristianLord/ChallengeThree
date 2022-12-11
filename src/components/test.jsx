import React from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


function Test(){
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (

        <div className='conatiner'>
            <Document file="https://localhost:7149/Journals/1f218da3-6f88-4c72-8cfd-1ffb12556580Test_PDF.pdf">
                <Page height={600} pageNumber={1} />
            </Document>
        </div>
    )
}

export default Test