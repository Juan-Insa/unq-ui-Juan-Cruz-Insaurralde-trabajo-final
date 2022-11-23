import { useEffect, useState } from "react"

const Questions = (data) => {
  let [dataQ,setDataQ] = useState()
  let [current, setCurrent] = useState((-6));

  useEffect(() => {
    setDataQ(data.data[0])
    setCurrent(current + 1)
    console.log(data.data)
    console.log(dataQ)
  }, [data, dataQ])
  
  return (
    <div>
      
    </div>
   )
}

const DisplayQuestion = (question) => {
  <div>

  </div>
}

export default Questions