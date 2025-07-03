function RecentSearch({recentHistory,setRecentHistory,setSelectedHistory}) {
  
  const clearHistory =()=>{
      localStorage.clear();
      setRecentHistory([]);
    }

    const clearSelectedHistory = (selectedItem) => {
      let history = JSON.parse(localStorage.getItem('history'));
      history= history.filter((item)=>{
        if(item!== selectedItem){
          return item;
        }
        
      })
      setRecentHistory(history);
      localStorage.setItem('history', JSON.stringify(history));
      console.log(history);
      
    }
  return (
    <>
      <div className='col-span-1 dark:bg-zinc-700 bg-red-100 pt-5 overflow-auto h-screen'>
      {/* Add Sidebar content here */}
        <h1 className='text-xl dark:text-white text-zinc-800 flex justify-center'><span>Recent Search</span>
          <button onClick={clearHistory} className='cursor-pointer dark:hover:bg-zinc-900 hover:bg-red-200 bd-zinc-700' ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f4f4f5"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
        </h1>
        <ul  className='text-left px-5 mt-2  '>
        {
          recentHistory && recentHistory.map((item, index)=>(
            <div key={index+Math.random()} className='flex justify-between items-center relative group'>
              <li onClick={()=>setSelectedHistory(item)} className='w-full p-1 pl-5 px-5 dark:text-zinc-400 text-zinc-500   cursor-pointer truncate dark:hover:bg-zinc-600 dark:hover:text-zinc-100 hover:bg-red-200 hover:text-red-900' >{item}</li>
              <button onClick={()=>clearSelectedHistory(item)} className='cursor-pointer dark:hover:bg-zinc-900 hover:bg-red-200 bd-zinc-700' ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f4f4f5"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
            </div>
            
            
          ))
        }
        </ul>
      </div>
    </>
  )
}
export default RecentSearch;