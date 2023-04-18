export const NameList=()=>{
    const names=['Diana','Bruce','Tom'];

    return <div> 
        {
            names.map((name)=>{
                return <h2>{name}</h2>
               
            })
        }
    </div>

}