import Answer from './Answer';

function QuestionAnswer({item, index}){

  return (
    <>
      <div key={index+Math.random()} className={item.type=='q'? 'flex justify-end' : ''}>
        {
          item.type === 'q' ?
          <li key={index+Math.random()} className='text-right  p-1 border-8 dark:border-zinc-600 border-red-100 dark:bg-zinc-600 bg-red-100 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl pr-10 w-fit'>
            <Answer ans={item.text} totalResult={1} index={index} type={item.type} /></li>
          :item.text.map((ansItem,ansIndex)=>(
            <li key={ansIndex+Math.random()} className='text-left p-1'><Answer ans={ansItem} totalResult={item.length} index={ansIndex} type={item.type} /></li>
          ))
        }
      </div>
    </>
  )
}
export default QuestionAnswer;