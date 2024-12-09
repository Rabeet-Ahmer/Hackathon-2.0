import Hero from '@/components/homepage/Hero'
import Popular from '@/components/homepage/Popular'
import Recomended from '@/components/homepage/Recomended'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Recomended/>
    </div>
  )
}

export default page