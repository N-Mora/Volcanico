export class Volcan {

    static count = 1;
    public name: string;
    public location: string;
    public type: string;
    public origin: string;
    public funFact: string;
    public lastEruption: number;
    public id = 0;

    /*constructor(name: string, location: string, type: string, origin: string, funFact: string, lastEruption: number) {
        this.name = name;
        this.location = location;
        this.type = type;
        this.origin = origin;
        this.funFact = funFact;
        this.lastEruption = lastEruption;
    }*/

    constructor(name= '', location= '', type= '', origin= '', funFact= '', lastEruption= null) {
        this.id = Volcan.count++;
        this.name = name;
        this.location = location;
        this.type = type;
        this.origin = origin;
        this.funFact = funFact;
        this.lastEruption = lastEruption;
    }

}
