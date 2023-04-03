export class User {
    private id: number;
     full_name : string;
    private age : number;
  
    constructor(id:number, fullname:string, age:number){
        this.id = id,
        this.full_name = fullname,
        this.age = age
    }
    public set fullname(value:string){
        this.full_name = value;
    }
    
    public get fullname():string{
        return this.full_name;
    }
    public get user_age():number{
        return this.age;
    }
    public set user_age(age:number){
        this.age = age;
    }
    public get getId():number{return this.id}


}
