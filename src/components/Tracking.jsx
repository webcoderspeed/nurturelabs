import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Spinner from './Spinner';

const Tracking = () => {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard')
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setLoading(false)
      })
    }
    fetchData()
  }, [])




  return (
    <div>
      {
        loading ? (
          <Spinner />
        ) : (
        <>
         <div className='font-bold flex justify-between'>
            <span className='text-xl'>The terms you are tracking</span>
            <span>The data will refresh in every 5 min</span>
          </div>
              <table className='shadow-md mt-2'>
              <tbody className='bg-white text-center'>
                <tr className='border-b border-gray-200'>
                  <th className='p-4 px-6 w-72'>Keywords</th>
                  <th className='p-4 px-6 w-72'>Goal</th>
                  <th className='p-4 px-6 w-72'>Matches</th>
                  <th className='p-4 px-6 w-72'>Search Status</th>
                  <th className='p-4 px-6 w-72'>Delete Keyword</th>
                </tr>
                {
                  data && data.map(item => {
                    return (
                      <tr key={item.id} className='border-b border-gray-200 text-sm'>
                          <td  className='p-4 px-6 w-72 flex justify-between items-center'>{item.keyword}
                          <AiOutlineSearch className='text-xl'/>
                          </td>
                          <td  className='p-4 px-6 w-72 capitalize'>{item.goal}</td>
                          <td  className='p-4 px-6 w-72'>{item.matches}</td>
                          <td  className='p-4 px-6 w-72'>{item.search_status}</td>
                          <td  className='p-4 px-6 w-72'>
                            <span className='bg-gray-400 rounded-full h-6 w-6 px-3 py-2 text-white font-bold cursor-pointer'>X</span>
                          </td>
                      </tr>
                    )
                  })
                }
              </tbody>
          </table> 
        </>
        )
      }
    </div>
  )
}

export default Tracking
