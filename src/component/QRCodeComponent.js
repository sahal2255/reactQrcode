import React, { useState } from 'react'
import './QRCodeComponent.css'
import QRCode from 'qrcode.react'

 const QRCodeGenerator=()=>{
  const [inputValue,setInputValue]=useState('')

  const handleChange=(event)=>{
    setInputValue(event.target.value)
  }
  
  const handleDownload=()=>{
    const canvas= document.querySelector('canvas')
    const download=canvas
    .toDataURL('image/png')
    .replace('image/png','image/octet-stream')
    const downloadLink=document.createElement('a')
    downloadLink.href=download
    downloadLink.download='qrconde.png'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return(   

    <div className='qr-container'>
      {/* gjh */}
      <div className='qr-body'>
          <h1 className='qr-header'>QRCode Generator</h1>
        <div className='qr-input-container'>

          <input type="text" value={inputValue} 
          onChange={handleChange} 
          placeholder='Enter Text...' 
          className='qr-input'
          />
        </div>
        <div className='qr-code-container'>
          <div className='qr-code'>
            {inputValue && <QRCode value={inputValue}  size={205}/>}
          </div>   
        </div>
        <div>
        <div className='button-container'>
          {inputValue && (
            <button className='download-button' onClick={handleDownload}>
              Download
            </button>
          )}
        </div>
          
        </div>
      </div>
    </div>
  )
  
 }

export default QRCodeGenerator;