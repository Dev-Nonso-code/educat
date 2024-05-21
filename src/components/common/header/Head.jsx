import React from "react"
import "./Head.css"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB' id="head">
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
           <a href="https://www.facebook.com/godwin.obasi.395/"><i class="bi bi-facebook icon p-2"></i></a>
            <i className='bi bi-instagram icon p-2'></i>
            <i className='bi bi-twitter icon p-2'></i>
            <i class="bi bi-youtube icon p-2"></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
