import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow flex items-center justify-center py-16 bg-pet-light">
        <div className="text-center px-4">
          <div className="mb-6 inline-block">
          <FontAwesomeIcon icon={faPaw} className='text-6xl primary-color animate-bounce' />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4 font-['Nunito']">Working on it</h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-lg mx-auto">
            We are currently working on this page. Please check back later or return to the homepage.
          </p>
          <button size="lg" className="bg-[#3aafa9] hover:bg-[#528885] text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-pet-secondary transition duration-300 ease-in-out">
            <Link href="/">
              Return Home
            </Link>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Notfound
