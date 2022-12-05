// Topics:
// describe and context
// it or specify
// Unit test demo



// Dummy math application

let add =(a,b) => a+b;
let sub =(a,b) => a-b;
let mul =(a,b) => a*b;
let div =(a,b) => a/b;

// positive test

describe("Unit testing",()=>{
    context("Positive Numbers Math operations",()=>{
        it("Should add positive numbers",()=>{
            expect(add(11,22)).to.eq(33);
        })

        it("Should substract positive numbers",()=>{
            expect(sub(22,11)).to.eq(11);
        })

        it("Should multiply positive numbers",()=>{
            expect(mul(11,3)).to.eq(33);
        })

        it("Should divide positive numbers",()=>{
            expect(div(333,11)).to.eq(3);
        })
    });

    context("Decimal Numbers Math operations",()=>{
        it("Should add decimal numbers",()=>{
            expect(add(111.0,222.0)).to.eq(333.0);
        })

        it("Should substract decimal numbers",()=>{
            expect(sub(222.0,111.0)).to.eq(111.0); 
        })

        it("Should multiply decimal numbers",()=>{
            expect(mul(111.0,3.0)).to.eq(333.0);
        })

        it("Should divide decimal numbers",()=>{
            expect(div(333.0,11.0)).to.eq(33.0);
        })
    });
})

// negative test
