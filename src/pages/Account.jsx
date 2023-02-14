import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/cb7b5c0a-99e2-4251-bf4a-8d4c9ac4edaa/TR-tr-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="/" className='w-full h-[400px] object-cover' />
                    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                    <div className='absolute top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                    </div>
            </div>
            <SavedShows/>
        </>
    )
}

export default Account