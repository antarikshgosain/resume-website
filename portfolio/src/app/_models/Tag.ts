export class Tag {

    //==>ADD NEW TAGS HERE

    //LANGUAGES
    static readonly JAVA = new Tag('Java','#9b6a10');
    static readonly PYTHON = new Tag('Python','#777706');
    static readonly JAVASCRIPT = new Tag('Javascript','purple');
    static readonly SQL = new Tag('MySql','#054242');

    //FRAMEWORKS
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly REACT = new Tag('React','green');

    //DEVOPS
    static readonly AWS = new Tag('AWS','blue');
    static readonly MS_AZURE = new Tag('Azure','darkblue');
    static readonly LINUX = new Tag('Linux','#51006f');
    


    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}