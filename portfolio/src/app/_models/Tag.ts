export class Tag {

    //==>ADD NEW TAGS HERE

    //LANGUAGES
    static readonly JAVA = new Tag('Java','orange');
    static readonly PYTHON = new Tag('Python','yellow');
    static readonly JAVASCRIPT = new Tag('MySql','purple');
    static readonly SQL = new Tag('MySql','cyan');

    //FRAMEWORKS
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly REACT = new Tag('React','green');

    //DEVOPS
    static readonly AWS = new Tag('AWS','blue');
    static readonly MS_AZURE = new Tag('Azure','darkblue');
    


    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}