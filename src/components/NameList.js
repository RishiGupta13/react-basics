export const NameList=()=>{
    const names=['Diana','Bruce','Tom'];

    return <div> 
        {
            names.map((name)=>{
                return <h2 key={name}>{name}</h2>
               
            })
        }
    </div>

}