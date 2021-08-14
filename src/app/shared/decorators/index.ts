export function Emoji(){
    return <T extends object, U extends keyof T>(target:T,key:U)=>{
        var val:any=target[key];
        const getter= ()=>{
            return val;
        }

        const setter=(value:string)=>{

            val=`😝${value}😝`
        }
        Object.defineProperty(target,key,{
            get: getter,
            set:setter,
            enumerable:true,
            configurable:true


        })
    }


}


export function Confirmable(message:string){

    return <U extends object, T extends keyof U>(target:U,key:T,descriptor:PropertyDescriptor)=>{
        const original=descriptor.value;
        descriptor.value=function (...args:any){
            const allow=window.confirm(message)
            if(allow){
                const result=original.apply(this,args)
                return result
            }else{
                return null
            }

        }

    }
}