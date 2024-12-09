import React from 'react'

const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='px-6 md:px-[60px] py-8'>
        {children}
    </div>
  )
}

export default Wrapper