
// (P) Principal
// (n) Number of times interest is compounded per year
// (r) Interest Rate in Decimal
// (nr) Time (Years)

// API for Compound Interest JavaScript Formula
// A = P(Math.pow((1+r/n),nr));

// function CompoundInterest(P, r, n, nr)
import CompoundInterest from "./CompoundInterest"

let P = 500000;
let r = 5.100;
let n = 12;
let t = 5;

let nCom = 7;

function CompoundInterestAPI(){
    let fResult = (Math.round(nCom * CompoundInterest(P, r, n, t))).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return 'The Compound Interest for '+nCom
    +' Companies in '+t+'years is = '+fResult;
}


export default CompoundInterestAPI;
