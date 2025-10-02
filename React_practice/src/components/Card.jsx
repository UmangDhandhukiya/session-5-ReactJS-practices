const Card = ({ data , stat }) => {

  return (
    <div className='flex justify-around flex-wrap'>
      {data.map((value, index) => (
        <div key={index} className='bg-black text-white font-bold p-4 my-2 w-60'>
          <h1>Name : {value.name}</h1>
          <h1>City : {value.city}</h1>
          <h1>Study : {value.study}</h1>
          <h1>College : {value.college}</h1>
          <h1>I a from App.Jsx {stat}</h1>
        </div>
      ))}
    </div>
  )
}

export default Card
