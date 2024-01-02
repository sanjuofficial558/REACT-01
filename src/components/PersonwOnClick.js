function PersonwOnclick({name,bg, onclick}){

    return (
        <>
        <p className={`bg-[${bg}]`}>Favourite cricketer : {name}</p>
        <button onClick={onclick} className= "btn text-[20px] bg-[green] p-2 rounded-md my-3">Click to Change Name</button>
      </>
      )

}

export {PersonwOnclick};