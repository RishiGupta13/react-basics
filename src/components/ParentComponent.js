import {ChildComponent} from './ChildComponent'

export const ParentComponent=()=>{
    const greetParent=(childName)=>{
        alert(`Hello Parent I am  ${childName}` );
    }

    return <ChildComponent greetHandler={greetParent} />
    
}
