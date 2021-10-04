export class Frameworks{
    frameworks:Array<string>;
    constructor(){
        this.frameworks = Array<string>("Entity","Asp.core");
    }

    getFrameworks(): string[] {
        return this.frameworks;
    }
    addFrameworks(framework: string){
        this.frameworks.push(framework);
    }
}