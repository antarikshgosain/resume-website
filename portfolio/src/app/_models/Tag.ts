export class Tag {

    static readonly ANGULAR = new Tag('Angular','red');
    static readonly JAVA = new Tag('Java','orange');
    static readonly REACT = new Tag('React','green');
    static readonly AWS = new Tag('AWS','blue');
    static readonly PYTHON = new Tag('Python','yellow');
    static readonly MS_AZURE = new Tag('Azure','darkblue');
    static readonly SQL = new Tag('MySql','cyan');


    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}