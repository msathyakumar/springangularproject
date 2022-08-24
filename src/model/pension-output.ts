export class PensionOutput {
    name:string = "";
    aadhaarNumber:string = "";
    pensionAmount:string = "";
    constructor(name:string,aadhaarNumber:string,pensionAmount:string) {
        this.name = name;
        this.aadhaarNumber=aadhaarNumber;
        this.pensionAmount = pensionAmount;
    
}
}
