import Head from 'next/head'
import React from 'react'

const home = () => {
  return (
    <div>
<Head>
      <title>Testing Example</title>
      <meta name="title" content="Testing Example" />
      <meta name="description" content="Testing Example" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://devjam.org" />
      <meta property="og:title" content="Dev Jam" />
      <meta property="og:description" content="Build weekly projects to improve your skills" />
      <meta property="og:image" content="https://devjam.org/assets/images/astronaut.png" />

    </Head>

<h1>Hello World Testing app</h1>
    </div>
  )
}

export default home