
// (A) Amount
// (P) Principal
// (n) Number of times interest is compounded per year
// (r) Interest Rate in Decimal
// (nt) Time in Years

// Compound Interest JavaScript Formula
// A = P*(Math.pow((1+r/n),nr));

// React Component Creation
export default function CompoundInterest(P, r, n, t){
    return P*(Math.pow((1+r/n),t));
}

// export default CompoundInterest;