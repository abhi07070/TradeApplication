import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <main className="main">
            <div className="landing-page">
                <div className="left-landing-page">
                    <h1>Trading is now easier</h1>
                    <p>How much time did you spend trading,<br />
                        how many times did you struggle and how many times did you fail?<br />
                        Don't worry, now you can trade more easily.</p>
                    <div className="button">
                        <input type="mail" placeholder='Enter your mail' />
                        <button className='sub-btn'>Subscribe</button>
                    </div>
                </div>
                <div className="right-landing-page">
                    <img src="https://media-public.canva.com/v3bJs/MAErVVv3bJs/1/s.png" alt="" />
                </div>

                {/* <div className="card-one">
                  <p>hello</p>
                  <p>hello</p>
                  <p>hello</p>
                </div> */}
            </div>
        </main>
    )
}

export default LandingPage
