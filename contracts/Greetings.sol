// SPDX-Licence-Indetifier : UnLincese
pragma solidity ^0.8.7;
import "hardhat/console.sol";

contract Greeter{
    string private greeting;
    string str = "hello";

    constructor(string memory _greeting){
        console.log('The initial greeting is ',_greeting);
        greeting = _greeting;
    }

    function greet() public view returns(string memory){
        return greeting;
    }

    function setGreeting(string memory _greeting) public{
        greeting = _greeting;
    }

    function printString() view public {
        console.log(str);
    }


}