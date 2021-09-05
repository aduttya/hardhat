const { expect } = require("chai");

describe('testing Greeting contract',async()=>{

    let greeting

    it('deploying the contract',async()=>{

        const Greeting = await ethers.getContractFactory("Greeter");

        greeting = await Greeting.deploy('hi');

        console.log(greeting.address)

    })

    it('setting the greeting',async ()=>{
        await greeting.setGreeting('second greet').then(function(results){
            console.log(results)
        })
    })

    it('calling greet function',async()=>{
        await greeting.greet().then(function(results){
            console.log('The greet is : ',results)
        })
    })
})