// import { useState } from "react"
import { MenuButton } from "../MenuButton/MenuButton"
import logoPic from "../../assets/Images/wujha logo.png"
import "./AppHeaderStyle.css"
type AppheaderProps = {
 setSidebarOpen:()=>void 
 IsSideOpen:boolean
}
export const AppHeader = ({setSidebarOpen,IsSideOpen}:AppheaderProps) => {
// const [Checked,setChecked]=useState(false)
// const toggle=()=>{  
//   setChecked(!Checked)
//   setSidebarOpen()
// }

  return (
    <div className="w-100 d-flex justify-content-between align-items-center appheader">
        <div className="logo">
            <img src={logoPic} alt="" className="logo-ig" style={{objectFit:"contain"}}/>

        </div>
<div >
  <div onClick={setSidebarOpen}>
<MenuButton isOpen={IsSideOpen}/>
</div>
</div>
    </div>
  )
}
