import React from 'react'

const Github = 'https://github.com/luckhiem/custom-daily-report'
const Issues = 'https://github.com/luckhiem/custom-daily-report/issues'
const versions = '1.0.0'

const FooterInfo = () =>
  <div>
    <div className='footer-box'>
      <a href={Github}>About</a>
      <span />
      <a href={Issues}>Feedback</a>
    </div>
    <div className='bottom-line'>
      <span />
      <p>
        Versions {versions}
      </p>
    </div>
  </div>

export default FooterInfo
