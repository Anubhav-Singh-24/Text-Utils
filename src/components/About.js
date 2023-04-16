import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3'>
        <h2>About</h2>
      <div className="img" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src="about.jpg" alt="About Text Utils" style={{width:'40vw',borderRadius:'12px',border:props.mode==='dark'?'2px solid white':'none'}}/>
      </div>
      <div className="container about-app my-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla natus totam officiis amet modi harum nostrum dolor placeat? Nisi, ullam autem? Vero architecto iusto explicabo, tempora eum porro repudiandae officiis autem at nostrum assumenda cum? Exercitationem ipsa omnis, voluptatem, deleniti at aut ad in, neque ipsum ullam distinctio error.</p>
      </div>
    </div>
  )
}
