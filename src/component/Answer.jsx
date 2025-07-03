import React, { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStar } from "../Helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";

const Answer=({ans,index, totalResult, type})=>{


  const [heading, setHeading]= useState(false);
  const [answer,setAnswer]= useState(ans);

  useEffect(()=> {
    if(checkHeading(ans)){
      setHeading(true);
      setAnswer(replaceHeadingStar(ans))
    }
  },[]);

  const renderer = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '');

    return (!inline && match ? (
      <SyntaxHighlighter 
        {...props}
        children={String(children).replace(/\n$/,'')}
        language={match[1]}
        style={dark}
        preTag="div" 
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    ));
    },
    
  };
  

  return(
    <div>

      {
        index==0 && totalResult>1? <span className="text-1xl pt-2 block dark:text-white text-zinc-800">{answer}</span>:
        heading? <span className="pt-2 text-1xl block dark:text-white text-zinc-800">{answer}</span>
        : <span className={type='q'?'pl-5': 'pl-5 text-lg'}>
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        </span>
      }
      
    </div>
  )
}
export default Answer;

//  <div className="bg-zinc-700 text-white p-4 rounded-xl mb-2 shadow">
//       <h1 className="text-lg">{ans}</h1>
//     </div>