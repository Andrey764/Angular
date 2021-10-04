export class Languages{
    languages:Array<string>;
    constructor(){
        this.languages = Array<string>("C#","C++","JavaScript");
    }

    getLanguages(): string[] {
        return this.languages;
    }
    addLanguage(language: string){
        this.languages.push(language);
    }
}