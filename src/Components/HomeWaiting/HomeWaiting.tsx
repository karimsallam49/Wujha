import { useState } from "react"
import RequestFormModal from "../SchduleFrom/Schduleform"
import "./HomeWaitingStyle.css"
const HomeWaiting = () => {
  const [OpenRequestForm, setOpenRequestForm] = useState(false)
  const closeRequestForm = () => setOpenRequestForm(false)
  return (
    <div className="homewaitingContainer">
      <h1>Home is waiting for
</h1>
<h1>
    you here
</h1>


<button className="sch-btn" onClick={()=>setOpenRequestForm(true)}>
    schdule A Tour
</button>
<RequestFormModal OpenRequestForm={OpenRequestForm} closeRequestForm={closeRequestForm}/>
    </div>

  )
}

export default HomeWaiting
