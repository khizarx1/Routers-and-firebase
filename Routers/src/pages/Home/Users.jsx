import React,{useState,useEffect} from 'react'
import Commonpage from '../../components/Commonpage'
import {users} from '../../data/users'
function Users() {

// const initialUsers = users;





const [userList, setUserList] = useState(users)
const [status, setStatus] = useState('all')
const [limit, setLimit] = useState('5')

const statuses = ['all', 'active', 'inactive', 'pending']

useEffect(() => {
    console.log(users)
    
    if (status !== 'all') {
        
    let filteredUserList = users.filter((user) => (
        user.status === status

    ))
    setUserList(filteredUserList)
    } else {
        setUserList(users.slice(0, limit))
    }
     
   
}, [status, limit])

console.log(users)

  return (
    <div>
        <Commonpage text={`Here are Users with status ${status}`} customClass={'py-4'} /> 
        <select className='border rounded my-3' onChange={e => { setStatus(e.target.value)}}>   
        {
            statuses.map((status) => (
                <option value={status} key={status}>{status}</option>
            ))
        }
        </select>
        <input
          className="text-center rounded-lg border border-slate-400"
          type="number"
          placeholder='Enter your limit'
          value={limit}
          onChange={e => { setLimit(e.target.value)}}
        />
        <ol>
            {
                userList.map((user, idx) => (
                    <li key={idx}>{idx + 1} . Name: <b>{user.name}</b> and Status: <b>{user.status}</b></li>
                ))
            }
        </ol>
    </div>
  )
}

export default Users