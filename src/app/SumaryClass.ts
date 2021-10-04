import { Languages } from "./Languages";
import { Frameworks } from "./Frameworks";

export class SummaryClass{
    Name:string = "Andrey";
    Surname:string = "Grigoriev";
    Age:number = 19;
    Date:string = "20:04:2002";
    Languages:Languages;
    Frameworks:Frameworks;
    LinkGitHub:string = "https://github.com/Andrey764";
    Image:string = "../../assets/MyPhoto.png";
    TextSize:number = 25;

    constructor(){
        this.Languages = new Languages();
        this.Frameworks = new Frameworks();
    }
}