import React, { useState } from 'react'

interface Person { 
  name: string ,
  age : number
}



function MyApp(){
  const [user, setUser] = useState<Person>({
    name: "",
    age : 0
  })

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log()
  }

  // if we dont define a user in start it will give error in setUSer
  // one way to define a user like we have done above  or 
  // while spreading the previous state use prev! --> will tell it is not undefined
  return (
    <div>
      
      <form onSubmit={submitHandler}>
        <input type="number" value={user?.age}
          onChange={(e) => setUser( prev => ({ ...prev! , age: Number(e.target.value)})) } />
          {/* 2nd way is this prev!  */}
        {/* onChange={(e) => setUser( prev => ({ ...prev! , age: Number(e.target.value)})) } /> */}
        <input type="text"
          value={user?.name || ""}
          onChange={(e) => setUser(prev => ({ ...prev!, name: e.target.value }) ) }
        />
      </form>
    </div>
  )
}

export default MyApp