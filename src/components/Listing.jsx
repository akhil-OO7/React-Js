import React from 'react'

const Listing = () => {
    let lang =["Dot.Net" ,  "React","Nextjs" , "java", "golang",];
    let obj =[
        {id:'1', lang:'Java'},
        {id:'2', lang:'Python'},
        {id:'3', lang:'React'},
        {id:'4', lang:'Next Js'},
    ]
  return (
    <div>Listing
        <h1>checking new things</h1>
        <ul>
            {lang.map((lang,index)=>(
                <li key={index}>{lang}</li>
            ))}


        </ul>
        <h2> List of our lang</h2>
        {
            obj.map((obj)=>(
                <li key = {obj.id} style={{textAlign:"left"}}>
                    {obj.id}{obj.lang}
                </li>
            ))
        }
        {obj.map((obj)=>(
            <li >
                {obj.id}


            </li>
            
        ))
        }



    </div>
  )
}

export default Listing