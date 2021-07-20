import React from 'react';
import { Document } from 'react-pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <Document file= '../../assets/Resume.pdf' onLoadSuccess={onDocumentLoadSuccess}/>
    </div>
  );
}
