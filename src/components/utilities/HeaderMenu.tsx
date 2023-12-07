import { HeaderMenu } from "@/app/interface";

const HeaderMenu = ({title}: HeaderMenu)=>{
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-blueOcean">{title}</h3>
      </div>
    
    </div>
  )
}

export default HeaderMenu;