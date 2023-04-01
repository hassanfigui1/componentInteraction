export class User {
    private id: number;
    private full_name : string;
    private age : number;
  
    constructor(id:number, fullname:string, age:number){
        this.id = id,
        this.full_name = fullname,
        this.age = age
    }
    
    public get getName(){
        return this.full_name;
    }
    public get getAge(){
        return this.age;
    }
    public get getId(){return this.id}


}
