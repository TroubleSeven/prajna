export const ERC721BasicToken = 
{
  "contractName": "ERC721BasicToken",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6111f68061001e6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063081812fc146100a9578063095ea7b31461010c57806323b872dd1461014e57806342842e0e146101af5780634f558e79146102105780636352211e1461024b57806370a08231146102ae578063a22cb465146102fb578063b88d4fde1461033f578063e985e9c5146103e3575b600080fd5b34156100b457600080fd5b6100ca6004808035906020019091905050610453565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011757600080fd5b61014c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610490565b005b341561015957600080fd5b6101ad600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610656565b005b34156101ba57600080fd5b61020e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b005b341561021b57600080fd5b61023160048080359060200190919050506107a5565b604051808215151515815260200191505060405180910390f35b341561025657600080fd5b61026c6004808035906020019091905050610816565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b957600080fd5b6102e5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610893565b6040518082815260200191505060405180910390f35b341561030657600080fd5b61033d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610917565b005b341561034a57600080fd5b6103e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a53565b005b34156103ee57600080fd5b610439600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a92565b604051808215151515815260200191505060405180910390f35b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049b82610816565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156104d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061051857506105178133610a92565b5b151561052357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661054483610453565b73ffffffffffffffffffffffffffffffffffffffff161415806105945750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561065157826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b806106613382610b26565b151561066c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106a857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6106ee8483610bbb565b6106f88483610d24565b6107028383610e52565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b806107783382610b26565b151561078357600080fd5b61079f8484846020604051908101604052806000815250610a53565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108d057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561095257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81610a5e3382610b26565b1515610a6957600080fd5b610a74858585610656565b610a8085858585610faa565b1515610a8b57600080fd5b5050505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080610b3283610816565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ba157508373ffffffffffffffffffffffffffffffffffffffff16610b8984610453565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bb25750610bb18185610a92565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bdb82610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610bfd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d205760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610d4482610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610d6657600080fd5b610db96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ebf57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f636001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119990919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610fcc8573ffffffffffffffffffffffffffffffffffffffff166111b7565b1515610fdb5760019150611177565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110a657808201518184015260208101905061108b565b50505050905090810190601f1680156110d35780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156110f357600080fd5b6102c65a03f1151561110457600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b600082821115151561118e57fe5b818303905092915050565b60008082840190508381101515156111ad57fe5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a723058205ebd3f4449830fb056d63004780a2ef68759bf888b8246f5f4c74e2b845851440029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063081812fc146100a9578063095ea7b31461010c57806323b872dd1461014e57806342842e0e146101af5780634f558e79146102105780636352211e1461024b57806370a08231146102ae578063a22cb465146102fb578063b88d4fde1461033f578063e985e9c5146103e3575b600080fd5b34156100b457600080fd5b6100ca6004808035906020019091905050610453565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011757600080fd5b61014c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610490565b005b341561015957600080fd5b6101ad600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610656565b005b34156101ba57600080fd5b61020e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b005b341561021b57600080fd5b61023160048080359060200190919050506107a5565b604051808215151515815260200191505060405180910390f35b341561025657600080fd5b61026c6004808035906020019091905050610816565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b957600080fd5b6102e5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610893565b6040518082815260200191505060405180910390f35b341561030657600080fd5b61033d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610917565b005b341561034a57600080fd5b6103e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a53565b005b34156103ee57600080fd5b610439600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a92565b604051808215151515815260200191505060405180910390f35b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049b82610816565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156104d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061051857506105178133610a92565b5b151561052357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661054483610453565b73ffffffffffffffffffffffffffffffffffffffff161415806105945750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561065157826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b806106613382610b26565b151561066c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106a857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6106ee8483610bbb565b6106f88483610d24565b6107028383610e52565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b806107783382610b26565b151561078357600080fd5b61079f8484846020604051908101604052806000815250610a53565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108d057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561095257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81610a5e3382610b26565b1515610a6957600080fd5b610a74858585610656565b610a8085858585610faa565b1515610a8b57600080fd5b5050505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080610b3283610816565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ba157508373ffffffffffffffffffffffffffffffffffffffff16610b8984610453565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bb25750610bb18185610a92565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bdb82610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610bfd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d205760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610d4482610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610d6657600080fd5b610db96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ebf57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f636001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119990919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610fcc8573ffffffffffffffffffffffffffffffffffffffff166111b7565b1515610fdb5760019150611177565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110a657808201518184015260208101905061108b565b50505050905090810190601f1680156110d35780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156110f357600080fd5b6102c65a03f1151561110457600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b600082821115151561118e57fe5b818303905092915050565b60008082840190508381101515156111ad57fe5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a723058205ebd3f4449830fb056d63004780a2ef68759bf888b8246f5f4c74e2b845851440029",
  "sourceMap": "300:10368:41:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "300:10368:41:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2998:350;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5042:315;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5964:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3969:200;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6794:227;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;2998:350::-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;5042:315::-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;5964:154::-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;2445:140::-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;2107:164::-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;3969:200::-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;4478:142::-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;9172:204::-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:41;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;835:110:31:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;451:150:29:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\nimport \"./ERC721Receiver.sol\";\nimport \"../../math/SafeMath.sol\";\nimport \"../../AddressUtils.sol\";\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic implementation\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721BasicToken is ERC721Basic {\n  using SafeMath for uint256;\n  using AddressUtils for address;\n  \n  // Equals to `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`\n  // which can be also obtained as `ERC721Receiver(0).onERC721Received.selector`\n  bytes4 constant ERC721_RECEIVED = 0xf0b9e5ba; \n\n  // Mapping from token ID to owner\n  mapping (uint256 => address) internal tokenOwner;\n\n  // Mapping from token ID to approved address\n  mapping (uint256 => address) internal tokenApprovals;\n\n  // Mapping from owner to number of owned token\n  mapping (address => uint256) internal ownedTokensCount;\n\n  // Mapping from owner to operator approvals\n  mapping (address => mapping (address => bool)) internal operatorApprovals;\n\n  /**\n  * @dev Guarantees msg.sender is owner of the given token\n  * @param _tokenId uint256 ID of the token to validate its ownership belongs to msg.sender\n  */\n  modifier onlyOwnerOf(uint256 _tokenId) {\n    require(ownerOf(_tokenId) == msg.sender);\n    _;\n  }\n\n  /**\n  * @dev Checks msg.sender can transfer a token, by being owner, approved, or operator\n  * @param _tokenId uint256 ID of the token to validate\n  */\n  modifier canTransfer(uint256 _tokenId) {\n    require(isApprovedOrOwner(msg.sender, _tokenId));\n    _;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address\n  * @param _owner address to query the balance of\n  * @return uint256 representing the amount owned by the passed address\n  */\n  function balanceOf(address _owner) public view returns (uint256) {\n    require(_owner != address(0));\n    return ownedTokensCount[_owner];\n  }\n\n  /**\n  * @dev Gets the owner of the specified token ID\n  * @param _tokenId uint256 ID of the token to query the owner of\n  * @return owner address currently marked as the owner of the given token ID\n  */\n  function ownerOf(uint256 _tokenId) public view returns (address) {\n    address owner = tokenOwner[_tokenId];\n    require(owner != address(0));\n    return owner;\n  }\n\n  /**\n  * @dev Returns whether the specified token exists\n  * @param _tokenId uint256 ID of the token to query the existance of\n  * @return whether the token exists\n  */\n  function exists(uint256 _tokenId) public view returns (bool) {\n    address owner = tokenOwner[_tokenId];\n    return owner != address(0);\n  }\n\n  /**\n  * @dev Approves another address to transfer the given token ID\n  * @dev The zero address indicates there is no approved address.\n  * @dev There can only be one approved address per token at a given time.\n  * @dev Can only be called by the token owner or an approved operator.\n  * @param _to address to be approved for the given token ID\n  * @param _tokenId uint256 ID of the token to be approved\n  */\n  function approve(address _to, uint256 _tokenId) public {\n    address owner = ownerOf(_tokenId);\n    require(_to != owner);\n    require(msg.sender == owner || isApprovedForAll(owner, msg.sender));\n\n    if (getApproved(_tokenId) != address(0) || _to != address(0)) {\n      tokenApprovals[_tokenId] = _to;\n      Approval(owner, _to, _tokenId);\n    }\n  }\n\n  /**\n   * @dev Gets the approved address for a token ID, or zero if no address set\n   * @param _tokenId uint256 ID of the token to query the approval of\n   * @return address currently approved for a the given token ID\n   */\n  function getApproved(uint256 _tokenId) public view returns (address) {\n    return tokenApprovals[_tokenId];\n  }\n\n\n  /**\n  * @dev Sets or unsets the approval of a given operator\n  * @dev An operator is allowed to transfer all tokens of the sender on their behalf\n  * @param _to operator address to set the approval\n  * @param _approved representing the status of the approval to be set\n  */\n  function setApprovalForAll(address _to, bool _approved) public {\n    require(_to != msg.sender);\n    operatorApprovals[msg.sender][_to] = _approved;\n    ApprovalForAll(msg.sender, _to, _approved);\n  }\n\n  /**\n   * @dev Tells whether an operator is approved by a given owner\n   * @param _owner owner address which you want to query the approval of\n   * @param _operator operator address which you want to query the approval of\n   * @return bool whether the given operator is approved by the given owner\n   */\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool) {\n    return operatorApprovals[_owner][_operator];\n  }\n\n  /**\n  * @dev Transfers the ownership of a given token ID to another address\n  * @dev Usage of this method is discouraged, use `safeTransferFrom` whenever possible\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function transferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    require(_from != address(0));\n    require(_to != address(0));\n\n    clearApproval(_from, _tokenId);\n    removeTokenFrom(_from, _tokenId);\n    addTokenTo(_to, _tokenId);\n    \n    Transfer(_from, _to, _tokenId);\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    safeTransferFrom(_from, _to, _tokenId, \"\");\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes data to send along with a safe transfer check\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public canTransfer(_tokenId) {\n    transferFrom(_from, _to, _tokenId);\n    require(checkAndCallSafeTransfer(_from, _to, _tokenId, _data));\n  }\n\n  /**\n   * @dev Returns whether the given spender can transfer a given token ID\n   * @param _spender address of the spender to query\n   * @param _tokenId uint256 ID of the token to be transferred\n   * @return bool whether the msg.sender is approved for the given token ID,\n   *  is an operator of the owner, or is the owner of the token\n   */\n  function isApprovedOrOwner(address _spender, uint256 _tokenId) internal view returns (bool) {\n    address owner = ownerOf(_tokenId);\n    return _spender == owner || getApproved(_tokenId) == _spender || isApprovedForAll(owner, _spender);\n  }\n\n  /**\n  * @dev Internal function to mint a new token\n  * @dev Reverts if the given token ID already exists\n  * @param _to The address that will own the minted token\n  * @param _tokenId uint256 ID of the token to be minted by the msg.sender\n  */\n  function _mint(address _to, uint256 _tokenId) internal {\n    require(_to != address(0));\n    addTokenTo(_to, _tokenId);\n    Transfer(address(0), _to, _tokenId);\n  }\n\n  /**\n  * @dev Internal function to burn a specific token\n  * @dev Reverts if the token does not exist\n  * @param _tokenId uint256 ID of the token being burned by the msg.sender\n  */\n  function _burn(address _owner, uint256 _tokenId) internal {\n    clearApproval(_owner, _tokenId);\n    removeTokenFrom(_owner, _tokenId);\n    Transfer(_owner, address(0), _tokenId);\n  }\n\n  /**\n  * @dev Internal function to clear current approval of a given token ID\n  * @dev Reverts if the given address is not indeed the owner of the token\n  * @param _owner owner of the token\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function clearApproval(address _owner, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _owner);\n    if (tokenApprovals[_tokenId] != address(0)) {\n      tokenApprovals[_tokenId] = address(0);\n      Approval(_owner, address(0), _tokenId);\n    }\n  }\n\n  /**\n  * @dev Internal function to add a token ID to the list of a given address\n  * @param _to address representing the new owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be added to the tokens list of the given address\n  */\n  function addTokenTo(address _to, uint256 _tokenId) internal {\n    require(tokenOwner[_tokenId] == address(0));\n    tokenOwner[_tokenId] = _to;\n    ownedTokensCount[_to] = ownedTokensCount[_to].add(1);\n  }\n\n  /**\n  * @dev Internal function to remove a token ID from the list of a given address\n  * @param _from address representing the previous owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be removed from the tokens list of the given address\n  */\n  function removeTokenFrom(address _from, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _from);\n    ownedTokensCount[_from] = ownedTokensCount[_from].sub(1);\n    tokenOwner[_tokenId] = address(0);\n  }\n\n  /**\n  * @dev Internal function to invoke `onERC721Received` on a target address\n  * @dev The call is not executed if the target address is not a contract\n  * @param _from address representing the previous owner of the given token ID\n  * @param _to target address that will receive the tokens\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes optional data to send along with the call\n  * @return whether the call correctly returned the expected magic value\n  */\n  function checkAndCallSafeTransfer(address _from, address _to, uint256 _tokenId, bytes _data) internal returns (bool) {\n    if (!_to.isContract()) {\n      return true;\n    }\n    bytes4 retval = ERC721Receiver(_to).onERC721Received(_from, _tokenId, _data);\n    return (retval == ERC721_RECEIVED);\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
      "exportedSymbols": {
        "ERC721BasicToken": [
          10100
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 9519,
        "name": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "attributes": {
          "SourceUnit": 9518,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 10101,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9520,
        "name": "ImportDirective",
        "src": "26:27:41"
      },
      {
        "attributes": {
          "SourceUnit": 10118,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol",
          "file": "./ERC721Receiver.sol",
          "scope": 10101,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9521,
        "name": "ImportDirective",
        "src": "54:30:41"
      },
      {
        "attributes": {
          "SourceUnit": 8763,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 10101,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9522,
        "name": "ImportDirective",
        "src": "85:33:41"
      },
      {
        "attributes": {
          "SourceUnit": 8605,
          "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
          "file": "../../AddressUtils.sol",
          "scope": 10101,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9523,
        "name": "ImportDirective",
        "src": "119:32:41"
      },
      {
        "attributes": {
          "contractDependencies": [
            9517
          ],
          "contractKind": "contract",
          "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            10100,
            9517
          ],
          "name": "ERC721BasicToken",
          "scope": 10101
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721Basic",
                  "referencedDeclaration": 9517,
                  "type": "contract ERC721Basic"
                },
                "id": 9524,
                "name": "UserDefinedTypeName",
                "src": "329:11:41"
              }
            ],
            "id": 9525,
            "name": "InheritanceSpecifier",
            "src": "329:11:41"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 8762,
                  "type": "library SafeMath"
                },
                "id": 9526,
                "name": "UserDefinedTypeName",
                "src": "351:8:41"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 9527,
                "name": "ElementaryTypeName",
                "src": "364:7:41"
              }
            ],
            "id": 9528,
            "name": "UsingForDirective",
            "src": "345:27:41"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AddressUtils",
                  "referencedDeclaration": 8604,
                  "type": "library AddressUtils"
                },
                "id": 9529,
                "name": "UserDefinedTypeName",
                "src": "381:12:41"
              },
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 9530,
                "name": "ElementaryTypeName",
                "src": "398:7:41"
              }
            ],
            "id": 9531,
            "name": "UsingForDirective",
            "src": "375:31:41"
          },
          {
            "attributes": {
              "constant": true,
              "name": "ERC721_RECEIVED",
              "scope": 10100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes4",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes4",
                  "type": "bytes4"
                },
                "id": 9532,
                "name": "ElementaryTypeName",
                "src": "571:6:41"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30786630623965356261",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 4038714810",
                  "value": "0xf0b9e5ba"
                },
                "id": 9533,
                "name": "Literal",
                "src": "605:10:41"
              }
            ],
            "id": 9534,
            "name": "VariableDeclaration",
            "src": "571:44:41"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenOwner",
              "scope": 10100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 9535,
                    "name": "ElementaryTypeName",
                    "src": "666:7:41"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 9536,
                    "name": "ElementaryTypeName",
                    "src": "677:7:41"
                  }
                ],
                "id": 9537,
                "name": "Mapping",
                "src": "657:28:41"
              }
            ],
            "id": 9538,
            "name": "VariableDeclaration",
            "src": "657:48:41"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenApprovals",
              "scope": 10100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 9539,
                    "name": "ElementaryTypeName",
                    "src": "766:7:41"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 9540,
                    "name": "ElementaryTypeName",
                    "src": "777:7:41"
                  }
                ],
                "id": 9541,
                "name": "Mapping",
                "src": "757:28:41"
              }
            ],
            "id": 9542,
            "name": "VariableDeclaration",
            "src": "757:52:41"
          },
          {
            "attributes": {
              "constant": false,
              "name": "ownedTokensCount",
              "scope": 10100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 9543,
                    "name": "ElementaryTypeName",
                    "src": "872:7:41"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 9544,
                    "name": "ElementaryTypeName",
                    "src": "883:7:41"
                  }
                ],
                "id": 9545,
                "name": "Mapping",
                "src": "863:28:41"
              }
            ],
            "id": 9546,
            "name": "VariableDeclaration",
            "src": "863:54:41"
          },
          {
            "attributes": {
              "constant": false,
              "name": "operatorApprovals",
              "scope": 10100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 9547,
                    "name": "ElementaryTypeName",
                    "src": "977:7:41"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9548,
                        "name": "ElementaryTypeName",
                        "src": "997:7:41"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 9549,
                        "name": "ElementaryTypeName",
                        "src": "1008:4:41"
                      }
                    ],
                    "id": 9550,
                    "name": "Mapping",
                    "src": "988:25:41"
                  }
                ],
                "id": 9551,
                "name": "Mapping",
                "src": "968:46:41"
              }
            ],
            "id": 9552,
            "name": "VariableDeclaration",
            "src": "968:73:41"
          },
          {
            "attributes": {
              "name": "onlyOwnerOf",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9567,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9553,
                        "name": "ElementaryTypeName",
                        "src": "1229:7:41"
                      }
                    ],
                    "id": 9554,
                    "name": "VariableDeclaration",
                    "src": "1229:16:41"
                  }
                ],
                "id": 9555,
                "name": "ParameterList",
                "src": "1228:18:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9556,
                            "name": "Identifier",
                            "src": "1253:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        9625
                                      ],
                                      "referencedDeclaration": 9625,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 9557,
                                    "name": "Identifier",
                                    "src": "1261:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9554,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9558,
                                    "name": "Identifier",
                                    "src": "1269:8:41"
                                  }
                                ],
                                "id": 9559,
                                "name": "FunctionCall",
                                "src": "1261:17:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10500,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 9560,
                                    "name": "Identifier",
                                    "src": "1282:3:41"
                                  }
                                ],
                                "id": 9561,
                                "name": "MemberAccess",
                                "src": "1282:10:41"
                              }
                            ],
                            "id": 9562,
                            "name": "BinaryOperation",
                            "src": "1261:31:41"
                          }
                        ],
                        "id": 9563,
                        "name": "FunctionCall",
                        "src": "1253:40:41"
                      }
                    ],
                    "id": 9564,
                    "name": "ExpressionStatement",
                    "src": "1253:40:41"
                  },
                  {
                    "id": 9565,
                    "name": "PlaceholderStatement",
                    "src": "1299:1:41"
                  }
                ],
                "id": 9566,
                "name": "Block",
                "src": "1247:58:41"
              }
            ],
            "id": 9567,
            "name": "ModifierDefinition",
            "src": "1208:97:41"
          },
          {
            "attributes": {
              "name": "canTransfer",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9581,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9568,
                        "name": "ElementaryTypeName",
                        "src": "1484:7:41"
                      }
                    ],
                    "id": 9569,
                    "name": "VariableDeclaration",
                    "src": "1484:16:41"
                  }
                ],
                "id": 9570,
                "name": "ParameterList",
                "src": "1483:18:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9571,
                            "name": "Identifier",
                            "src": "1508:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9895,
                                  "type": "function (address,uint256) view returns (bool)",
                                  "value": "isApprovedOrOwner"
                                },
                                "id": 9572,
                                "name": "Identifier",
                                "src": "1516:17:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10500,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 9573,
                                    "name": "Identifier",
                                    "src": "1534:3:41"
                                  }
                                ],
                                "id": 9574,
                                "name": "MemberAccess",
                                "src": "1534:10:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9569,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 9575,
                                "name": "Identifier",
                                "src": "1546:8:41"
                              }
                            ],
                            "id": 9576,
                            "name": "FunctionCall",
                            "src": "1516:39:41"
                          }
                        ],
                        "id": 9577,
                        "name": "FunctionCall",
                        "src": "1508:48:41"
                      }
                    ],
                    "id": 9578,
                    "name": "ExpressionStatement",
                    "src": "1508:48:41"
                  },
                  {
                    "id": 9579,
                    "name": "PlaceholderStatement",
                    "src": "1562:1:41"
                  }
                ],
                "id": 9580,
                "name": "Block",
                "src": "1502:66:41"
              }
            ],
            "id": 9581,
            "name": "ModifierDefinition",
            "src": "1463:105:41"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 10100,
              "stateMutability": "view",
              "superFunction": 9443,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 9601,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9582,
                        "name": "ElementaryTypeName",
                        "src": "1775:7:41"
                      }
                    ],
                    "id": 9583,
                    "name": "VariableDeclaration",
                    "src": "1775:14:41"
                  }
                ],
                "id": 9584,
                "name": "ParameterList",
                "src": "1774:16:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9601,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9585,
                        "name": "ElementaryTypeName",
                        "src": "1812:7:41"
                      }
                    ],
                    "id": 9586,
                    "name": "VariableDeclaration",
                    "src": "1812:7:41"
                  }
                ],
                "id": 9587,
                "name": "ParameterList",
                "src": "1811:9:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9588,
                            "name": "Identifier",
                            "src": "1827:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9583,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 9589,
                                "name": "Identifier",
                                "src": "1835:6:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9590,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1845:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9591,
                                    "name": "Literal",
                                    "src": "1853:1:41"
                                  }
                                ],
                                "id": 9592,
                                "name": "FunctionCall",
                                "src": "1845:10:41"
                              }
                            ],
                            "id": 9593,
                            "name": "BinaryOperation",
                            "src": "1835:20:41"
                          }
                        ],
                        "id": 9594,
                        "name": "FunctionCall",
                        "src": "1827:29:41"
                      }
                    ],
                    "id": 9595,
                    "name": "ExpressionStatement",
                    "src": "1827:29:41"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9587
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9546,
                              "type": "mapping(address => uint256)",
                              "value": "ownedTokensCount"
                            },
                            "id": 9596,
                            "name": "Identifier",
                            "src": "1869:16:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9583,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 9597,
                            "name": "Identifier",
                            "src": "1886:6:41"
                          }
                        ],
                        "id": 9598,
                        "name": "IndexAccess",
                        "src": "1869:24:41"
                      }
                    ],
                    "id": 9599,
                    "name": "Return",
                    "src": "1862:31:41"
                  }
                ],
                "id": 9600,
                "name": "Block",
                "src": "1821:77:41"
              }
            ],
            "id": 9601,
            "name": "FunctionDefinition",
            "src": "1756:142:41"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 10100,
              "stateMutability": "view",
              "superFunction": 9450,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9625,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9602,
                        "name": "ElementaryTypeName",
                        "src": "2124:7:41"
                      }
                    ],
                    "id": 9603,
                    "name": "VariableDeclaration",
                    "src": "2124:16:41"
                  }
                ],
                "id": 9604,
                "name": "ParameterList",
                "src": "2123:18:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9625,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9605,
                        "name": "ElementaryTypeName",
                        "src": "2163:7:41"
                      }
                    ],
                    "id": 9606,
                    "name": "VariableDeclaration",
                    "src": "2163:7:41"
                  }
                ],
                "id": 9607,
                "name": "ParameterList",
                "src": "2162:9:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9609
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 9625,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9608,
                            "name": "ElementaryTypeName",
                            "src": "2178:7:41"
                          }
                        ],
                        "id": 9609,
                        "name": "VariableDeclaration",
                        "src": "2178:13:41"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9538,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 9610,
                            "name": "Identifier",
                            "src": "2194:10:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9603,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9611,
                            "name": "Identifier",
                            "src": "2205:8:41"
                          }
                        ],
                        "id": 9612,
                        "name": "IndexAccess",
                        "src": "2194:20:41"
                      }
                    ],
                    "id": 9613,
                    "name": "VariableDeclarationStatement",
                    "src": "2178:36:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9614,
                            "name": "Identifier",
                            "src": "2220:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9609,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 9615,
                                "name": "Identifier",
                                "src": "2228:5:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9616,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2237:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9617,
                                    "name": "Literal",
                                    "src": "2245:1:41"
                                  }
                                ],
                                "id": 9618,
                                "name": "FunctionCall",
                                "src": "2237:10:41"
                              }
                            ],
                            "id": 9619,
                            "name": "BinaryOperation",
                            "src": "2228:19:41"
                          }
                        ],
                        "id": 9620,
                        "name": "FunctionCall",
                        "src": "2220:28:41"
                      }
                    ],
                    "id": 9621,
                    "name": "ExpressionStatement",
                    "src": "2220:28:41"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9607
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 9609,
                          "type": "address",
                          "value": "owner"
                        },
                        "id": 9622,
                        "name": "Identifier",
                        "src": "2261:5:41"
                      }
                    ],
                    "id": 9623,
                    "name": "Return",
                    "src": "2254:12:41"
                  }
                ],
                "id": 9624,
                "name": "Block",
                "src": "2172:99:41"
              }
            ],
            "id": 9625,
            "name": "FunctionDefinition",
            "src": "2107:164:41"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "exists",
              "payable": false,
              "scope": 10100,
              "stateMutability": "view",
              "superFunction": 9457,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9645,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9626,
                        "name": "ElementaryTypeName",
                        "src": "2461:7:41"
                      }
                    ],
                    "id": 9627,
                    "name": "VariableDeclaration",
                    "src": "2461:16:41"
                  }
                ],
                "id": 9628,
                "name": "ParameterList",
                "src": "2460:18:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9645,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 9629,
                        "name": "ElementaryTypeName",
                        "src": "2500:4:41"
                      }
                    ],
                    "id": 9630,
                    "name": "VariableDeclaration",
                    "src": "2500:4:41"
                  }
                ],
                "id": 9631,
                "name": "ParameterList",
                "src": "2499:6:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9633
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 9645,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9632,
                            "name": "ElementaryTypeName",
                            "src": "2512:7:41"
                          }
                        ],
                        "id": 9633,
                        "name": "VariableDeclaration",
                        "src": "2512:13:41"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9538,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 9634,
                            "name": "Identifier",
                            "src": "2528:10:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9627,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9635,
                            "name": "Identifier",
                            "src": "2539:8:41"
                          }
                        ],
                        "id": 9636,
                        "name": "IndexAccess",
                        "src": "2528:20:41"
                      }
                    ],
                    "id": 9637,
                    "name": "VariableDeclarationStatement",
                    "src": "2512:36:41"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9631
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9633,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 9638,
                            "name": "Identifier",
                            "src": "2561:5:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9639,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2570:7:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9640,
                                "name": "Literal",
                                "src": "2578:1:41"
                              }
                            ],
                            "id": 9641,
                            "name": "FunctionCall",
                            "src": "2570:10:41"
                          }
                        ],
                        "id": 9642,
                        "name": "BinaryOperation",
                        "src": "2561:19:41"
                      }
                    ],
                    "id": 9643,
                    "name": "Return",
                    "src": "2554:26:41"
                  }
                ],
                "id": 9644,
                "name": "Block",
                "src": "2506:79:41"
              }
            ],
            "id": 9645,
            "name": "FunctionDefinition",
            "src": "2445:140:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": 9464,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9705,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9646,
                        "name": "ElementaryTypeName",
                        "src": "3015:7:41"
                      }
                    ],
                    "id": 9647,
                    "name": "VariableDeclaration",
                    "src": "3015:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9705,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9648,
                        "name": "ElementaryTypeName",
                        "src": "3028:7:41"
                      }
                    ],
                    "id": 9649,
                    "name": "VariableDeclaration",
                    "src": "3028:16:41"
                  }
                ],
                "id": 9650,
                "name": "ParameterList",
                "src": "3014:31:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9651,
                "name": "ParameterList",
                "src": "3053:0:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9653
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 9705,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9652,
                            "name": "ElementaryTypeName",
                            "src": "3059:7:41"
                          }
                        ],
                        "id": 9653,
                        "name": "VariableDeclaration",
                        "src": "3059:13:41"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                9625
                              ],
                              "referencedDeclaration": 9625,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 9654,
                            "name": "Identifier",
                            "src": "3075:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9649,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9655,
                            "name": "Identifier",
                            "src": "3083:8:41"
                          }
                        ],
                        "id": 9656,
                        "name": "FunctionCall",
                        "src": "3075:17:41"
                      }
                    ],
                    "id": 9657,
                    "name": "VariableDeclarationStatement",
                    "src": "3059:33:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9658,
                            "name": "Identifier",
                            "src": "3098:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9647,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9659,
                                "name": "Identifier",
                                "src": "3106:3:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9653,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 9660,
                                "name": "Identifier",
                                "src": "3113:5:41"
                              }
                            ],
                            "id": 9661,
                            "name": "BinaryOperation",
                            "src": "3106:12:41"
                          }
                        ],
                        "id": 9662,
                        "name": "FunctionCall",
                        "src": "3098:21:41"
                      }
                    ],
                    "id": 9663,
                    "name": "ExpressionStatement",
                    "src": "3098:21:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9664,
                            "name": "Identifier",
                            "src": "3125:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10500,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9665,
                                        "name": "Identifier",
                                        "src": "3133:3:41"
                                      }
                                    ],
                                    "id": 9666,
                                    "name": "MemberAccess",
                                    "src": "3133:10:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9653,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9667,
                                    "name": "Identifier",
                                    "src": "3147:5:41"
                                  }
                                ],
                                "id": 9668,
                                "name": "BinaryOperation",
                                "src": "3133:19:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "bool",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        9764
                                      ],
                                      "referencedDeclaration": 9764,
                                      "type": "function (address,address) view returns (bool)",
                                      "value": "isApprovedForAll"
                                    },
                                    "id": 9669,
                                    "name": "Identifier",
                                    "src": "3156:16:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9653,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9670,
                                    "name": "Identifier",
                                    "src": "3173:5:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10500,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9671,
                                        "name": "Identifier",
                                        "src": "3180:3:41"
                                      }
                                    ],
                                    "id": 9672,
                                    "name": "MemberAccess",
                                    "src": "3180:10:41"
                                  }
                                ],
                                "id": 9673,
                                "name": "FunctionCall",
                                "src": "3156:35:41"
                              }
                            ],
                            "id": 9674,
                            "name": "BinaryOperation",
                            "src": "3133:58:41"
                          }
                        ],
                        "id": 9675,
                        "name": "FunctionCall",
                        "src": "3125:67:41"
                      }
                    ],
                    "id": 9676,
                    "name": "ExpressionStatement",
                    "src": "3125:67:41"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        9717
                                      ],
                                      "referencedDeclaration": 9717,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "getApproved"
                                    },
                                    "id": 9677,
                                    "name": "Identifier",
                                    "src": "3203:11:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9649,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9678,
                                    "name": "Identifier",
                                    "src": "3215:8:41"
                                  }
                                ],
                                "id": 9679,
                                "name": "FunctionCall",
                                "src": "3203:21:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9680,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3228:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9681,
                                    "name": "Literal",
                                    "src": "3236:1:41"
                                  }
                                ],
                                "id": 9682,
                                "name": "FunctionCall",
                                "src": "3228:10:41"
                              }
                            ],
                            "id": 9683,
                            "name": "BinaryOperation",
                            "src": "3203:35:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9647,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9684,
                                "name": "Identifier",
                                "src": "3242:3:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9685,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3249:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9686,
                                    "name": "Literal",
                                    "src": "3257:1:41"
                                  }
                                ],
                                "id": 9687,
                                "name": "FunctionCall",
                                "src": "3249:10:41"
                              }
                            ],
                            "id": 9688,
                            "name": "BinaryOperation",
                            "src": "3242:17:41"
                          }
                        ],
                        "id": 9689,
                        "name": "BinaryOperation",
                        "src": "3203:56:41"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9542,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 9690,
                                        "name": "Identifier",
                                        "src": "3269:14:41"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9649,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 9691,
                                        "name": "Identifier",
                                        "src": "3284:8:41"
                                      }
                                    ],
                                    "id": 9692,
                                    "name": "IndexAccess",
                                    "src": "3269:24:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9647,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 9693,
                                    "name": "Identifier",
                                    "src": "3296:3:41"
                                  }
                                ],
                                "id": 9694,
                                "name": "Assignment",
                                "src": "3269:30:41"
                              }
                            ],
                            "id": 9695,
                            "name": "ExpressionStatement",
                            "src": "3269:30:41"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9428,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 9696,
                                    "name": "Identifier",
                                    "src": "3307:8:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9653,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9697,
                                    "name": "Identifier",
                                    "src": "3316:5:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9647,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 9698,
                                    "name": "Identifier",
                                    "src": "3323:3:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9649,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9699,
                                    "name": "Identifier",
                                    "src": "3328:8:41"
                                  }
                                ],
                                "id": 9700,
                                "name": "FunctionCall",
                                "src": "3307:30:41"
                              }
                            ],
                            "id": 9701,
                            "name": "ExpressionStatement",
                            "src": "3307:30:41"
                          }
                        ],
                        "id": 9702,
                        "name": "Block",
                        "src": "3261:83:41"
                      }
                    ],
                    "id": 9703,
                    "name": "IfStatement",
                    "src": "3199:145:41"
                  }
                ],
                "id": 9704,
                "name": "Block",
                "src": "3053:295:41"
              }
            ],
            "id": 9705,
            "name": "FunctionDefinition",
            "src": "2998:350:41"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 10100,
              "stateMutability": "view",
              "superFunction": 9471,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9717,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9706,
                        "name": "ElementaryTypeName",
                        "src": "3598:7:41"
                      }
                    ],
                    "id": 9707,
                    "name": "VariableDeclaration",
                    "src": "3598:16:41"
                  }
                ],
                "id": 9708,
                "name": "ParameterList",
                "src": "3597:18:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9717,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9709,
                        "name": "ElementaryTypeName",
                        "src": "3637:7:41"
                      }
                    ],
                    "id": 9710,
                    "name": "VariableDeclaration",
                    "src": "3637:7:41"
                  }
                ],
                "id": 9711,
                "name": "ParameterList",
                "src": "3636:9:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9711
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9542,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenApprovals"
                            },
                            "id": 9712,
                            "name": "Identifier",
                            "src": "3659:14:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9707,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9713,
                            "name": "Identifier",
                            "src": "3674:8:41"
                          }
                        ],
                        "id": 9714,
                        "name": "IndexAccess",
                        "src": "3659:24:41"
                      }
                    ],
                    "id": 9715,
                    "name": "Return",
                    "src": "3652:31:41"
                  }
                ],
                "id": 9716,
                "name": "Block",
                "src": "3646:42:41"
              }
            ],
            "id": 9717,
            "name": "FunctionDefinition",
            "src": "3577:111:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": 9478,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9748,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9718,
                        "name": "ElementaryTypeName",
                        "src": "3996:7:41"
                      }
                    ],
                    "id": 9719,
                    "name": "VariableDeclaration",
                    "src": "3996:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 9748,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 9720,
                        "name": "ElementaryTypeName",
                        "src": "4009:4:41"
                      }
                    ],
                    "id": 9721,
                    "name": "VariableDeclaration",
                    "src": "4009:14:41"
                  }
                ],
                "id": 9722,
                "name": "ParameterList",
                "src": "3995:29:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9723,
                "name": "ParameterList",
                "src": "4032:0:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9724,
                            "name": "Identifier",
                            "src": "4038:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9719,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9725,
                                "name": "Identifier",
                                "src": "4046:3:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10500,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 9726,
                                    "name": "Identifier",
                                    "src": "4053:3:41"
                                  }
                                ],
                                "id": 9727,
                                "name": "MemberAccess",
                                "src": "4053:10:41"
                              }
                            ],
                            "id": 9728,
                            "name": "BinaryOperation",
                            "src": "4046:17:41"
                          }
                        ],
                        "id": 9729,
                        "name": "FunctionCall",
                        "src": "4038:26:41"
                      }
                    ],
                    "id": 9730,
                    "name": "ExpressionStatement",
                    "src": "4038:26:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9552,
                                      "type": "mapping(address => mapping(address => bool))",
                                      "value": "operatorApprovals"
                                    },
                                    "id": 9731,
                                    "name": "Identifier",
                                    "src": "4070:17:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10500,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9732,
                                        "name": "Identifier",
                                        "src": "4088:3:41"
                                      }
                                    ],
                                    "id": 9733,
                                    "name": "MemberAccess",
                                    "src": "4088:10:41"
                                  }
                                ],
                                "id": 9735,
                                "name": "IndexAccess",
                                "src": "4070:29:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9719,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9734,
                                "name": "Identifier",
                                "src": "4100:3:41"
                              }
                            ],
                            "id": 9736,
                            "name": "IndexAccess",
                            "src": "4070:34:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9721,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 9737,
                            "name": "Identifier",
                            "src": "4107:9:41"
                          }
                        ],
                        "id": 9738,
                        "name": "Assignment",
                        "src": "4070:46:41"
                      }
                    ],
                    "id": 9739,
                    "name": "ExpressionStatement",
                    "src": "4070:46:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9436,
                              "type": "function (address,address,bool)",
                              "value": "ApprovalForAll"
                            },
                            "id": 9740,
                            "name": "Identifier",
                            "src": "4122:14:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10500,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 9741,
                                "name": "Identifier",
                                "src": "4137:3:41"
                              }
                            ],
                            "id": 9742,
                            "name": "MemberAccess",
                            "src": "4137:10:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9719,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9743,
                            "name": "Identifier",
                            "src": "4149:3:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9721,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 9744,
                            "name": "Identifier",
                            "src": "4154:9:41"
                          }
                        ],
                        "id": 9745,
                        "name": "FunctionCall",
                        "src": "4122:42:41"
                      }
                    ],
                    "id": 9746,
                    "name": "ExpressionStatement",
                    "src": "4122:42:41"
                  }
                ],
                "id": 9747,
                "name": "Block",
                "src": "4032:137:41"
              }
            ],
            "id": 9748,
            "name": "FunctionDefinition",
            "src": "3969:200:41"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedForAll",
              "payable": false,
              "scope": 10100,
              "stateMutability": "view",
              "superFunction": 9487,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 9764,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9749,
                        "name": "ElementaryTypeName",
                        "src": "4504:7:41"
                      }
                    ],
                    "id": 9750,
                    "name": "VariableDeclaration",
                    "src": "4504:14:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 9764,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9751,
                        "name": "ElementaryTypeName",
                        "src": "4520:7:41"
                      }
                    ],
                    "id": 9752,
                    "name": "VariableDeclaration",
                    "src": "4520:17:41"
                  }
                ],
                "id": 9753,
                "name": "ParameterList",
                "src": "4503:35:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9764,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 9754,
                        "name": "ElementaryTypeName",
                        "src": "4560:4:41"
                      }
                    ],
                    "id": 9755,
                    "name": "VariableDeclaration",
                    "src": "4560:4:41"
                  }
                ],
                "id": 9756,
                "name": "ParameterList",
                "src": "4559:6:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9756
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9552,
                                  "type": "mapping(address => mapping(address => bool))",
                                  "value": "operatorApprovals"
                                },
                                "id": 9757,
                                "name": "Identifier",
                                "src": "4579:17:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9750,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 9758,
                                "name": "Identifier",
                                "src": "4597:6:41"
                              }
                            ],
                            "id": 9759,
                            "name": "IndexAccess",
                            "src": "4579:25:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9752,
                              "type": "address",
                              "value": "_operator"
                            },
                            "id": 9760,
                            "name": "Identifier",
                            "src": "4605:9:41"
                          }
                        ],
                        "id": 9761,
                        "name": "IndexAccess",
                        "src": "4579:36:41"
                      }
                    ],
                    "id": 9762,
                    "name": "Return",
                    "src": "4572:43:41"
                  }
                ],
                "id": 9763,
                "name": "Block",
                "src": "4566:54:41"
              }
            ],
            "id": 9764,
            "name": "FunctionDefinition",
            "src": "4478:142:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": 9496,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 9814,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9765,
                        "name": "ElementaryTypeName",
                        "src": "5064:7:41"
                      }
                    ],
                    "id": 9766,
                    "name": "VariableDeclaration",
                    "src": "5064:13:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9814,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9767,
                        "name": "ElementaryTypeName",
                        "src": "5079:7:41"
                      }
                    ],
                    "id": 9768,
                    "name": "VariableDeclaration",
                    "src": "5079:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9814,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9769,
                        "name": "ElementaryTypeName",
                        "src": "5092:7:41"
                      }
                    ],
                    "id": 9770,
                    "name": "VariableDeclaration",
                    "src": "5092:16:41"
                  }
                ],
                "id": 9771,
                "name": "ParameterList",
                "src": "5063:46:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9775,
                "name": "ParameterList",
                "src": "5139:0:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9581,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 9772,
                    "name": "Identifier",
                    "src": "5117:11:41"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9770,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 9773,
                    "name": "Identifier",
                    "src": "5129:8:41"
                  }
                ],
                "id": 9774,
                "name": "ModifierInvocation",
                "src": "5117:21:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9776,
                            "name": "Identifier",
                            "src": "5145:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9766,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 9777,
                                "name": "Identifier",
                                "src": "5153:5:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9778,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5162:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9779,
                                    "name": "Literal",
                                    "src": "5170:1:41"
                                  }
                                ],
                                "id": 9780,
                                "name": "FunctionCall",
                                "src": "5162:10:41"
                              }
                            ],
                            "id": 9781,
                            "name": "BinaryOperation",
                            "src": "5153:19:41"
                          }
                        ],
                        "id": 9782,
                        "name": "FunctionCall",
                        "src": "5145:28:41"
                      }
                    ],
                    "id": 9783,
                    "name": "ExpressionStatement",
                    "src": "5145:28:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9784,
                            "name": "Identifier",
                            "src": "5179:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9768,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9785,
                                "name": "Identifier",
                                "src": "5187:3:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9786,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5194:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9787,
                                    "name": "Literal",
                                    "src": "5202:1:41"
                                  }
                                ],
                                "id": 9788,
                                "name": "FunctionCall",
                                "src": "5194:10:41"
                              }
                            ],
                            "id": 9789,
                            "name": "BinaryOperation",
                            "src": "5187:17:41"
                          }
                        ],
                        "id": 9790,
                        "name": "FunctionCall",
                        "src": "5179:26:41"
                      }
                    ],
                    "id": 9791,
                    "name": "ExpressionStatement",
                    "src": "5179:26:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9991,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 9792,
                            "name": "Identifier",
                            "src": "5212:13:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9766,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9793,
                            "name": "Identifier",
                            "src": "5226:5:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9770,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9794,
                            "name": "Identifier",
                            "src": "5233:8:41"
                          }
                        ],
                        "id": 9795,
                        "name": "FunctionCall",
                        "src": "5212:30:41"
                      }
                    ],
                    "id": 9796,
                    "name": "ExpressionStatement",
                    "src": "5212:30:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10061,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 9797,
                            "name": "Identifier",
                            "src": "5248:15:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9766,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9798,
                            "name": "Identifier",
                            "src": "5264:5:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9770,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9799,
                            "name": "Identifier",
                            "src": "5271:8:41"
                          }
                        ],
                        "id": 9800,
                        "name": "FunctionCall",
                        "src": "5248:32:41"
                      }
                    ],
                    "id": 9801,
                    "name": "ExpressionStatement",
                    "src": "5248:32:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10026,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 9802,
                            "name": "Identifier",
                            "src": "5286:10:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9768,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9803,
                            "name": "Identifier",
                            "src": "5297:3:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9770,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9804,
                            "name": "Identifier",
                            "src": "5302:8:41"
                          }
                        ],
                        "id": 9805,
                        "name": "FunctionCall",
                        "src": "5286:25:41"
                      }
                    ],
                    "id": 9806,
                    "name": "ExpressionStatement",
                    "src": "5286:25:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9420,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 9807,
                            "name": "Identifier",
                            "src": "5322:8:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9766,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9808,
                            "name": "Identifier",
                            "src": "5331:5:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9768,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9809,
                            "name": "Identifier",
                            "src": "5338:3:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9770,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9810,
                            "name": "Identifier",
                            "src": "5343:8:41"
                          }
                        ],
                        "id": 9811,
                        "name": "FunctionCall",
                        "src": "5322:30:41"
                      }
                    ],
                    "id": 9812,
                    "name": "ExpressionStatement",
                    "src": "5322:30:41"
                  }
                ],
                "id": 9813,
                "name": "Block",
                "src": "5139:218:41"
              }
            ],
            "id": 9814,
            "name": "FunctionDefinition",
            "src": "5042:315:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": 9505,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 9834,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9815,
                        "name": "ElementaryTypeName",
                        "src": "5990:7:41"
                      }
                    ],
                    "id": 9816,
                    "name": "VariableDeclaration",
                    "src": "5990:13:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9834,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9817,
                        "name": "ElementaryTypeName",
                        "src": "6005:7:41"
                      }
                    ],
                    "id": 9818,
                    "name": "VariableDeclaration",
                    "src": "6005:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9834,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9819,
                        "name": "ElementaryTypeName",
                        "src": "6018:7:41"
                      }
                    ],
                    "id": 9820,
                    "name": "VariableDeclaration",
                    "src": "6018:16:41"
                  }
                ],
                "id": 9821,
                "name": "ParameterList",
                "src": "5989:46:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9825,
                "name": "ParameterList",
                "src": "6065:0:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9581,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 9822,
                    "name": "Identifier",
                    "src": "6043:11:41"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9820,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 9823,
                    "name": "Identifier",
                    "src": "6055:8:41"
                  }
                ],
                "id": 9824,
                "name": "ModifierInvocation",
                "src": "6043:21:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "overloadedDeclarations": [
                                9834,
                                9864
                              ],
                              "referencedDeclaration": 9864,
                              "type": "function (address,address,uint256,bytes memory)",
                              "value": "safeTransferFrom"
                            },
                            "id": 9826,
                            "name": "Identifier",
                            "src": "6071:16:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9816,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9827,
                            "name": "Identifier",
                            "src": "6088:5:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9818,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9828,
                            "name": "Identifier",
                            "src": "6095:3:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9820,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9829,
                            "name": "Identifier",
                            "src": "6100:8:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"\"",
                              "value": ""
                            },
                            "id": 9830,
                            "name": "Literal",
                            "src": "6110:2:41"
                          }
                        ],
                        "id": 9831,
                        "name": "FunctionCall",
                        "src": "6071:42:41"
                      }
                    ],
                    "id": 9832,
                    "name": "ExpressionStatement",
                    "src": "6071:42:41"
                  }
                ],
                "id": 9833,
                "name": "Block",
                "src": "6065:53:41"
              }
            ],
            "id": 9834,
            "name": "FunctionDefinition",
            "src": "5964:154:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": 9516,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 9864,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9835,
                        "name": "ElementaryTypeName",
                        "src": "6820:7:41"
                      }
                    ],
                    "id": 9836,
                    "name": "VariableDeclaration",
                    "src": "6820:13:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9864,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9837,
                        "name": "ElementaryTypeName",
                        "src": "6835:7:41"
                      }
                    ],
                    "id": 9838,
                    "name": "VariableDeclaration",
                    "src": "6835:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9864,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9839,
                        "name": "ElementaryTypeName",
                        "src": "6848:7:41"
                      }
                    ],
                    "id": 9840,
                    "name": "VariableDeclaration",
                    "src": "6848:16:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 9864,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 9841,
                        "name": "ElementaryTypeName",
                        "src": "6866:5:41"
                      }
                    ],
                    "id": 9842,
                    "name": "VariableDeclaration",
                    "src": "6866:11:41"
                  }
                ],
                "id": 9843,
                "name": "ParameterList",
                "src": "6819:59:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9847,
                "name": "ParameterList",
                "src": "6908:0:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9581,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 9844,
                    "name": "Identifier",
                    "src": "6886:11:41"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9840,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 9845,
                    "name": "Identifier",
                    "src": "6898:8:41"
                  }
                ],
                "id": 9846,
                "name": "ModifierInvocation",
                "src": "6886:21:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                9814
                              ],
                              "referencedDeclaration": 9814,
                              "type": "function (address,address,uint256)",
                              "value": "transferFrom"
                            },
                            "id": 9848,
                            "name": "Identifier",
                            "src": "6914:12:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9836,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9849,
                            "name": "Identifier",
                            "src": "6927:5:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9838,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9850,
                            "name": "Identifier",
                            "src": "6934:3:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9840,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9851,
                            "name": "Identifier",
                            "src": "6939:8:41"
                          }
                        ],
                        "id": 9852,
                        "name": "FunctionCall",
                        "src": "6914:34:41"
                      }
                    ],
                    "id": 9853,
                    "name": "ExpressionStatement",
                    "src": "6914:34:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9854,
                            "name": "Identifier",
                            "src": "6954:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10099,
                                  "type": "function (address,address,uint256,bytes memory) returns (bool)",
                                  "value": "checkAndCallSafeTransfer"
                                },
                                "id": 9855,
                                "name": "Identifier",
                                "src": "6962:24:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9836,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 9856,
                                "name": "Identifier",
                                "src": "6987:5:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9838,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9857,
                                "name": "Identifier",
                                "src": "6994:3:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9840,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 9858,
                                "name": "Identifier",
                                "src": "6999:8:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9842,
                                  "type": "bytes memory",
                                  "value": "_data"
                                },
                                "id": 9859,
                                "name": "Identifier",
                                "src": "7009:5:41"
                              }
                            ],
                            "id": 9860,
                            "name": "FunctionCall",
                            "src": "6962:53:41"
                          }
                        ],
                        "id": 9861,
                        "name": "FunctionCall",
                        "src": "6954:62:41"
                      }
                    ],
                    "id": 9862,
                    "name": "ExpressionStatement",
                    "src": "6954:62:41"
                  }
                ],
                "id": 9863,
                "name": "Block",
                "src": "6908:113:41"
              }
            ],
            "id": 9864,
            "name": "FunctionDefinition",
            "src": "6794:227:41"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedOrOwner",
              "payable": false,
              "scope": 10100,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 9895,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9865,
                        "name": "ElementaryTypeName",
                        "src": "7395:7:41"
                      }
                    ],
                    "id": 9866,
                    "name": "VariableDeclaration",
                    "src": "7395:16:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9895,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9867,
                        "name": "ElementaryTypeName",
                        "src": "7413:7:41"
                      }
                    ],
                    "id": 9868,
                    "name": "VariableDeclaration",
                    "src": "7413:16:41"
                  }
                ],
                "id": 9869,
                "name": "ParameterList",
                "src": "7394:36:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9895,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 9870,
                        "name": "ElementaryTypeName",
                        "src": "7454:4:41"
                      }
                    ],
                    "id": 9871,
                    "name": "VariableDeclaration",
                    "src": "7454:4:41"
                  }
                ],
                "id": 9872,
                "name": "ParameterList",
                "src": "7453:6:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9874
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 9895,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9873,
                            "name": "ElementaryTypeName",
                            "src": "7466:7:41"
                          }
                        ],
                        "id": 9874,
                        "name": "VariableDeclaration",
                        "src": "7466:13:41"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                9625
                              ],
                              "referencedDeclaration": 9625,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 9875,
                            "name": "Identifier",
                            "src": "7482:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9868,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9876,
                            "name": "Identifier",
                            "src": "7490:8:41"
                          }
                        ],
                        "id": 9877,
                        "name": "FunctionCall",
                        "src": "7482:17:41"
                      }
                    ],
                    "id": 9878,
                    "name": "VariableDeclarationStatement",
                    "src": "7466:33:41"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9872
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9866,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 9879,
                                    "name": "Identifier",
                                    "src": "7512:8:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9874,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9880,
                                    "name": "Identifier",
                                    "src": "7524:5:41"
                                  }
                                ],
                                "id": 9881,
                                "name": "BinaryOperation",
                                "src": "7512:17:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            9717
                                          ],
                                          "referencedDeclaration": 9717,
                                          "type": "function (uint256) view returns (address)",
                                          "value": "getApproved"
                                        },
                                        "id": 9882,
                                        "name": "Identifier",
                                        "src": "7533:11:41"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9868,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 9883,
                                        "name": "Identifier",
                                        "src": "7545:8:41"
                                      }
                                    ],
                                    "id": 9884,
                                    "name": "FunctionCall",
                                    "src": "7533:21:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9866,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 9885,
                                    "name": "Identifier",
                                    "src": "7558:8:41"
                                  }
                                ],
                                "id": 9886,
                                "name": "BinaryOperation",
                                "src": "7533:33:41"
                              }
                            ],
                            "id": 9887,
                            "name": "BinaryOperation",
                            "src": "7512:54:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    9764
                                  ],
                                  "referencedDeclaration": 9764,
                                  "type": "function (address,address) view returns (bool)",
                                  "value": "isApprovedForAll"
                                },
                                "id": 9888,
                                "name": "Identifier",
                                "src": "7570:16:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9874,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 9889,
                                "name": "Identifier",
                                "src": "7587:5:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9866,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 9890,
                                "name": "Identifier",
                                "src": "7594:8:41"
                              }
                            ],
                            "id": 9891,
                            "name": "FunctionCall",
                            "src": "7570:33:41"
                          }
                        ],
                        "id": 9892,
                        "name": "BinaryOperation",
                        "src": "7512:91:41"
                      }
                    ],
                    "id": 9893,
                    "name": "Return",
                    "src": "7505:98:41"
                  }
                ],
                "id": 9894,
                "name": "Block",
                "src": "7460:148:41"
              }
            ],
            "id": 9895,
            "name": "FunctionDefinition",
            "src": "7368:240:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_mint",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9924,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9896,
                        "name": "ElementaryTypeName",
                        "src": "7872:7:41"
                      }
                    ],
                    "id": 9897,
                    "name": "VariableDeclaration",
                    "src": "7872:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9924,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9898,
                        "name": "ElementaryTypeName",
                        "src": "7885:7:41"
                      }
                    ],
                    "id": 9899,
                    "name": "VariableDeclaration",
                    "src": "7885:16:41"
                  }
                ],
                "id": 9900,
                "name": "ParameterList",
                "src": "7871:31:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9901,
                "name": "ParameterList",
                "src": "7912:0:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9902,
                            "name": "Identifier",
                            "src": "7918:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9897,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9903,
                                "name": "Identifier",
                                "src": "7926:3:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9904,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "7933:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9905,
                                    "name": "Literal",
                                    "src": "7941:1:41"
                                  }
                                ],
                                "id": 9906,
                                "name": "FunctionCall",
                                "src": "7933:10:41"
                              }
                            ],
                            "id": 9907,
                            "name": "BinaryOperation",
                            "src": "7926:17:41"
                          }
                        ],
                        "id": 9908,
                        "name": "FunctionCall",
                        "src": "7918:26:41"
                      }
                    ],
                    "id": 9909,
                    "name": "ExpressionStatement",
                    "src": "7918:26:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10026,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 9910,
                            "name": "Identifier",
                            "src": "7950:10:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9897,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9911,
                            "name": "Identifier",
                            "src": "7961:3:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9899,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9912,
                            "name": "Identifier",
                            "src": "7966:8:41"
                          }
                        ],
                        "id": 9913,
                        "name": "FunctionCall",
                        "src": "7950:25:41"
                      }
                    ],
                    "id": 9914,
                    "name": "ExpressionStatement",
                    "src": "7950:25:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9420,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 9915,
                            "name": "Identifier",
                            "src": "7981:8:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9916,
                                "name": "ElementaryTypeNameExpression",
                                "src": "7990:7:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9917,
                                "name": "Literal",
                                "src": "7998:1:41"
                              }
                            ],
                            "id": 9918,
                            "name": "FunctionCall",
                            "src": "7990:10:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9897,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9919,
                            "name": "Identifier",
                            "src": "8002:3:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9899,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9920,
                            "name": "Identifier",
                            "src": "8007:8:41"
                          }
                        ],
                        "id": 9921,
                        "name": "FunctionCall",
                        "src": "7981:35:41"
                      }
                    ],
                    "id": 9922,
                    "name": "ExpressionStatement",
                    "src": "7981:35:41"
                  }
                ],
                "id": 9923,
                "name": "Block",
                "src": "7912:109:41"
              }
            ],
            "id": 9924,
            "name": "FunctionDefinition",
            "src": "7857:164:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_burn",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 9950,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9925,
                        "name": "ElementaryTypeName",
                        "src": "8223:7:41"
                      }
                    ],
                    "id": 9926,
                    "name": "VariableDeclaration",
                    "src": "8223:14:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9950,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9927,
                        "name": "ElementaryTypeName",
                        "src": "8239:7:41"
                      }
                    ],
                    "id": 9928,
                    "name": "VariableDeclaration",
                    "src": "8239:16:41"
                  }
                ],
                "id": 9929,
                "name": "ParameterList",
                "src": "8222:34:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9930,
                "name": "ParameterList",
                "src": "8266:0:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9991,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 9931,
                            "name": "Identifier",
                            "src": "8272:13:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9926,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 9932,
                            "name": "Identifier",
                            "src": "8286:6:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9928,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9933,
                            "name": "Identifier",
                            "src": "8294:8:41"
                          }
                        ],
                        "id": 9934,
                        "name": "FunctionCall",
                        "src": "8272:31:41"
                      }
                    ],
                    "id": 9935,
                    "name": "ExpressionStatement",
                    "src": "8272:31:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10061,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 9936,
                            "name": "Identifier",
                            "src": "8309:15:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9926,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 9937,
                            "name": "Identifier",
                            "src": "8325:6:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9928,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9938,
                            "name": "Identifier",
                            "src": "8333:8:41"
                          }
                        ],
                        "id": 9939,
                        "name": "FunctionCall",
                        "src": "8309:33:41"
                      }
                    ],
                    "id": 9940,
                    "name": "ExpressionStatement",
                    "src": "8309:33:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9420,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 9941,
                            "name": "Identifier",
                            "src": "8348:8:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9926,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 9942,
                            "name": "Identifier",
                            "src": "8357:6:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9943,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8365:7:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9944,
                                "name": "Literal",
                                "src": "8373:1:41"
                              }
                            ],
                            "id": 9945,
                            "name": "FunctionCall",
                            "src": "8365:10:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9928,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9946,
                            "name": "Identifier",
                            "src": "8377:8:41"
                          }
                        ],
                        "id": 9947,
                        "name": "FunctionCall",
                        "src": "8348:38:41"
                      }
                    ],
                    "id": 9948,
                    "name": "ExpressionStatement",
                    "src": "8348:38:41"
                  }
                ],
                "id": 9949,
                "name": "Block",
                "src": "8266:125:41"
              }
            ],
            "id": 9950,
            "name": "FunctionDefinition",
            "src": "8208:183:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "clearApproval",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 9991,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9951,
                        "name": "ElementaryTypeName",
                        "src": "8676:7:41"
                      }
                    ],
                    "id": 9952,
                    "name": "VariableDeclaration",
                    "src": "8676:14:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9991,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9953,
                        "name": "ElementaryTypeName",
                        "src": "8692:7:41"
                      }
                    ],
                    "id": 9954,
                    "name": "VariableDeclaration",
                    "src": "8692:16:41"
                  }
                ],
                "id": 9955,
                "name": "ParameterList",
                "src": "8675:34:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9956,
                "name": "ParameterList",
                "src": "8719:0:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9957,
                            "name": "Identifier",
                            "src": "8725:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        9625
                                      ],
                                      "referencedDeclaration": 9625,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 9958,
                                    "name": "Identifier",
                                    "src": "8733:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9954,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9959,
                                    "name": "Identifier",
                                    "src": "8741:8:41"
                                  }
                                ],
                                "id": 9960,
                                "name": "FunctionCall",
                                "src": "8733:17:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9952,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 9961,
                                "name": "Identifier",
                                "src": "8754:6:41"
                              }
                            ],
                            "id": 9962,
                            "name": "BinaryOperation",
                            "src": "8733:27:41"
                          }
                        ],
                        "id": 9963,
                        "name": "FunctionCall",
                        "src": "8725:36:41"
                      }
                    ],
                    "id": 9964,
                    "name": "ExpressionStatement",
                    "src": "8725:36:41"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9542,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenApprovals"
                                },
                                "id": 9965,
                                "name": "Identifier",
                                "src": "8771:14:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9954,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 9966,
                                "name": "Identifier",
                                "src": "8786:8:41"
                              }
                            ],
                            "id": 9967,
                            "name": "IndexAccess",
                            "src": "8771:24:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9968,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8799:7:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9969,
                                "name": "Literal",
                                "src": "8807:1:41"
                              }
                            ],
                            "id": 9970,
                            "name": "FunctionCall",
                            "src": "8799:10:41"
                          }
                        ],
                        "id": 9971,
                        "name": "BinaryOperation",
                        "src": "8771:38:41"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9542,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 9972,
                                        "name": "Identifier",
                                        "src": "8819:14:41"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9954,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 9973,
                                        "name": "Identifier",
                                        "src": "8834:8:41"
                                      }
                                    ],
                                    "id": 9974,
                                    "name": "IndexAccess",
                                    "src": "8819:24:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 9975,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8846:7:41"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 9976,
                                        "name": "Literal",
                                        "src": "8854:1:41"
                                      }
                                    ],
                                    "id": 9977,
                                    "name": "FunctionCall",
                                    "src": "8846:10:41"
                                  }
                                ],
                                "id": 9978,
                                "name": "Assignment",
                                "src": "8819:37:41"
                              }
                            ],
                            "id": 9979,
                            "name": "ExpressionStatement",
                            "src": "8819:37:41"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9428,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 9980,
                                    "name": "Identifier",
                                    "src": "8864:8:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9952,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 9981,
                                    "name": "Identifier",
                                    "src": "8873:6:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 9982,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8881:7:41"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 9983,
                                        "name": "Literal",
                                        "src": "8889:1:41"
                                      }
                                    ],
                                    "id": 9984,
                                    "name": "FunctionCall",
                                    "src": "8881:10:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9954,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9985,
                                    "name": "Identifier",
                                    "src": "8893:8:41"
                                  }
                                ],
                                "id": 9986,
                                "name": "FunctionCall",
                                "src": "8864:38:41"
                              }
                            ],
                            "id": 9987,
                            "name": "ExpressionStatement",
                            "src": "8864:38:41"
                          }
                        ],
                        "id": 9988,
                        "name": "Block",
                        "src": "8811:98:41"
                      }
                    ],
                    "id": 9989,
                    "name": "IfStatement",
                    "src": "8767:142:41"
                  }
                ],
                "id": 9990,
                "name": "Block",
                "src": "8719:194:41"
              }
            ],
            "id": 9991,
            "name": "FunctionDefinition",
            "src": "8653:260:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "addTokenTo",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10026,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9992,
                        "name": "ElementaryTypeName",
                        "src": "9192:7:41"
                      }
                    ],
                    "id": 9993,
                    "name": "VariableDeclaration",
                    "src": "9192:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10026,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9994,
                        "name": "ElementaryTypeName",
                        "src": "9205:7:41"
                      }
                    ],
                    "id": 9995,
                    "name": "VariableDeclaration",
                    "src": "9205:16:41"
                  }
                ],
                "id": 9996,
                "name": "ParameterList",
                "src": "9191:31:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9997,
                "name": "ParameterList",
                "src": "9232:0:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9998,
                            "name": "Identifier",
                            "src": "9238:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9538,
                                      "type": "mapping(uint256 => address)",
                                      "value": "tokenOwner"
                                    },
                                    "id": 9999,
                                    "name": "Identifier",
                                    "src": "9246:10:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9995,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 10000,
                                    "name": "Identifier",
                                    "src": "9257:8:41"
                                  }
                                ],
                                "id": 10001,
                                "name": "IndexAccess",
                                "src": "9246:20:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 10002,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "9270:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 10003,
                                    "name": "Literal",
                                    "src": "9278:1:41"
                                  }
                                ],
                                "id": 10004,
                                "name": "FunctionCall",
                                "src": "9270:10:41"
                              }
                            ],
                            "id": 10005,
                            "name": "BinaryOperation",
                            "src": "9246:34:41"
                          }
                        ],
                        "id": 10006,
                        "name": "FunctionCall",
                        "src": "9238:43:41"
                      }
                    ],
                    "id": 10007,
                    "name": "ExpressionStatement",
                    "src": "9238:43:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9538,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 10008,
                                "name": "Identifier",
                                "src": "9287:10:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9995,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 10009,
                                "name": "Identifier",
                                "src": "9298:8:41"
                              }
                            ],
                            "id": 10010,
                            "name": "IndexAccess",
                            "src": "9287:20:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9993,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10011,
                            "name": "Identifier",
                            "src": "9310:3:41"
                          }
                        ],
                        "id": 10012,
                        "name": "Assignment",
                        "src": "9287:26:41"
                      }
                    ],
                    "id": 10013,
                    "name": "ExpressionStatement",
                    "src": "9287:26:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9546,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 10014,
                                "name": "Identifier",
                                "src": "9319:16:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9993,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10015,
                                "name": "Identifier",
                                "src": "9336:3:41"
                              }
                            ],
                            "id": 10016,
                            "name": "IndexAccess",
                            "src": "9319:21:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 8761,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9546,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 10017,
                                        "name": "Identifier",
                                        "src": "9343:16:41"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9993,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 10018,
                                        "name": "Identifier",
                                        "src": "9360:3:41"
                                      }
                                    ],
                                    "id": 10019,
                                    "name": "IndexAccess",
                                    "src": "9343:21:41"
                                  }
                                ],
                                "id": 10020,
                                "name": "MemberAccess",
                                "src": "9343:25:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 10021,
                                "name": "Literal",
                                "src": "9369:1:41"
                              }
                            ],
                            "id": 10022,
                            "name": "FunctionCall",
                            "src": "9343:28:41"
                          }
                        ],
                        "id": 10023,
                        "name": "Assignment",
                        "src": "9319:52:41"
                      }
                    ],
                    "id": 10024,
                    "name": "ExpressionStatement",
                    "src": "9319:52:41"
                  }
                ],
                "id": 10025,
                "name": "Block",
                "src": "9232:144:41"
              }
            ],
            "id": 10026,
            "name": "FunctionDefinition",
            "src": "9172:204:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "removeTokenFrom",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 10061,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 10027,
                        "name": "ElementaryTypeName",
                        "src": "9676:7:41"
                      }
                    ],
                    "id": 10028,
                    "name": "VariableDeclaration",
                    "src": "9676:13:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10061,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10029,
                        "name": "ElementaryTypeName",
                        "src": "9691:7:41"
                      }
                    ],
                    "id": 10030,
                    "name": "VariableDeclaration",
                    "src": "9691:16:41"
                  }
                ],
                "id": 10031,
                "name": "ParameterList",
                "src": "9675:33:41"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10032,
                "name": "ParameterList",
                "src": "9718:0:41"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 10033,
                            "name": "Identifier",
                            "src": "9724:7:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        9625
                                      ],
                                      "referencedDeclaration": 9625,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 10034,
                                    "name": "Identifier",
                                    "src": "9732:7:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10030,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 10035,
                                    "name": "Identifier",
                                    "src": "9740:8:41"
                                  }
                                ],
                                "id": 10036,
                                "name": "FunctionCall",
                                "src": "9732:17:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10028,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 10037,
                                "name": "Identifier",
                                "src": "9753:5:41"
                              }
                            ],
                            "id": 10038,
                            "name": "BinaryOperation",
                            "src": "9732:26:41"
                          }
                        ],
                        "id": 10039,
                        "name": "FunctionCall",
                        "src": "9724:35:41"
                      }
                    ],
                    "id": 10040,
                    "name": "ExpressionStatement",
                    "src": "9724:35:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9546,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 10041,
                                "name": "Identifier",
                                "src": "9765:16:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10028,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 10042,
                                "name": "Identifier",
                                "src": "9782:5:41"
                              }
                            ],
                            "id": 10043,
                            "name": "IndexAccess",
                            "src": "9765:23:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 8737,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9546,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 10044,
                                        "name": "Identifier",
                                        "src": "9791:16:41"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10028,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 10045,
                                        "name": "Identifier",
                                        "src": "9808:5:41"
                                      }
                                    ],
                                    "id": 10046,
                                    "name": "IndexAccess",
                                    "src": "9791:23:41"
                                  }
                                ],
                                "id": 10047,
                                "name": "MemberAccess",
                                "src": "9791:27:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 10048,
                                "name": "Literal",
                                "src": "9819:1:41"
                              }
                            ],
                            "id": 10049,
                            "name": "FunctionCall",
                            "src": "9791:30:41"
                          }
                        ],
                        "id": 10050,
                        "name": "Assignment",
                        "src": "9765:56:41"
                      }
                    ],
                    "id": 10051,
                    "name": "ExpressionStatement",
                    "src": "9765:56:41"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9538,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 10052,
                                "name": "Identifier",
                                "src": "9827:10:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10030,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 10053,
                                "name": "Identifier",
                                "src": "9838:8:41"
                              }
                            ],
                            "id": 10054,
                            "name": "IndexAccess",
                            "src": "9827:20:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 10055,
                                "name": "ElementaryTypeNameExpression",
                                "src": "9850:7:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 10056,
                                "name": "Literal",
                                "src": "9858:1:41"
                              }
                            ],
                            "id": 10057,
                            "name": "FunctionCall",
                            "src": "9850:10:41"
                          }
                        ],
                        "id": 10058,
                        "name": "Assignment",
                        "src": "9827:33:41"
                      }
                    ],
                    "id": 10059,
                    "name": "ExpressionStatement",
                    "src": "9827:33:41"
                  }
                ],
                "id": 10060,
                "name": "Block",
                "src": "9718:147:41"
              }
            ],
            "id": 10061,
            "name": "FunctionDefinition",
            "src": "9651:214:41"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "checkAndCallSafeTransfer",
              "payable": false,
              "scope": 10100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 10099,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 10062,
                        "name": "ElementaryTypeName",
                        "src": "10402:7:41"
                      }
                    ],
                    "id": 10063,
                    "name": "VariableDeclaration",
                    "src": "10402:13:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10099,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 10064,
                        "name": "ElementaryTypeName",
                        "src": "10417:7:41"
                      }
                    ],
                    "id": 10065,
                    "name": "VariableDeclaration",
                    "src": "10417:11:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10099,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10066,
                        "name": "ElementaryTypeName",
                        "src": "10430:7:41"
                      }
                    ],
                    "id": 10067,
                    "name": "VariableDeclaration",
                    "src": "10430:16:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 10099,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 10068,
                        "name": "ElementaryTypeName",
                        "src": "10448:5:41"
                      }
                    ],
                    "id": 10069,
                    "name": "VariableDeclaration",
                    "src": "10448:11:41"
                  }
                ],
                "id": 10070,
                "name": "ParameterList",
                "src": "10401:59:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10099,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 10071,
                        "name": "ElementaryTypeName",
                        "src": "10479:4:41"
                      }
                    ],
                    "id": 10072,
                    "name": "VariableDeclaration",
                    "src": "10479:4:41"
                  }
                ],
                "id": 10073,
                "name": "ParameterList",
                "src": "10478:6:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isContract",
                                  "referencedDeclaration": 8603,
                                  "type": "function (address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10065,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 10074,
                                    "name": "Identifier",
                                    "src": "10496:3:41"
                                  }
                                ],
                                "id": 10075,
                                "name": "MemberAccess",
                                "src": "10496:14:41"
                              }
                            ],
                            "id": 10076,
                            "name": "FunctionCall",
                            "src": "10496:16:41"
                          }
                        ],
                        "id": 10077,
                        "name": "UnaryOperation",
                        "src": "10495:17:41"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 10073
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 10078,
                                "name": "Literal",
                                "src": "10529:4:41"
                              }
                            ],
                            "id": 10079,
                            "name": "Return",
                            "src": "10522:11:41"
                          }
                        ],
                        "id": 10080,
                        "name": "Block",
                        "src": "10514:26:41"
                      }
                    ],
                    "id": 10081,
                    "name": "IfStatement",
                    "src": "10491:49:41"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        10083
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "retval",
                          "scope": 10099,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes4",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes4",
                              "type": "bytes4"
                            },
                            "id": 10082,
                            "name": "ElementaryTypeName",
                            "src": "10545:6:41"
                          }
                        ],
                        "id": 10083,
                        "name": "VariableDeclaration",
                        "src": "10545:13:41"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes4",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "onERC721Received",
                              "referencedDeclaration": 10116,
                              "type": "function (address,uint256,bytes memory) external returns (bytes4)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "contract ERC721Receiver",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10117,
                                      "type": "type(contract ERC721Receiver)",
                                      "value": "ERC721Receiver"
                                    },
                                    "id": 10084,
                                    "name": "Identifier",
                                    "src": "10561:14:41"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10065,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 10085,
                                    "name": "Identifier",
                                    "src": "10576:3:41"
                                  }
                                ],
                                "id": 10086,
                                "name": "FunctionCall",
                                "src": "10561:19:41"
                              }
                            ],
                            "id": 10087,
                            "name": "MemberAccess",
                            "src": "10561:36:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10063,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 10088,
                            "name": "Identifier",
                            "src": "10598:5:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10067,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10089,
                            "name": "Identifier",
                            "src": "10605:8:41"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10069,
                              "type": "bytes memory",
                              "value": "_data"
                            },
                            "id": 10090,
                            "name": "Identifier",
                            "src": "10615:5:41"
                          }
                        ],
                        "id": 10091,
                        "name": "FunctionCall",
                        "src": "10561:60:41"
                      }
                    ],
                    "id": 10092,
                    "name": "VariableDeclarationStatement",
                    "src": "10545:76:41"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10073
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10083,
                                  "type": "bytes4",
                                  "value": "retval"
                                },
                                "id": 10093,
                                "name": "Identifier",
                                "src": "10635:6:41"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9534,
                                  "type": "bytes4",
                                  "value": "ERC721_RECEIVED"
                                },
                                "id": 10094,
                                "name": "Identifier",
                                "src": "10645:15:41"
                              }
                            ],
                            "id": 10095,
                            "name": "BinaryOperation",
                            "src": "10635:25:41"
                          }
                        ],
                        "id": 10096,
                        "name": "TupleExpression",
                        "src": "10634:27:41"
                      }
                    ],
                    "id": 10097,
                    "name": "Return",
                    "src": "10627:34:41"
                  }
                ],
                "id": 10098,
                "name": "Block",
                "src": "10485:181:41"
              }
            ],
            "id": 10099,
            "name": "FunctionDefinition",
            "src": "10368:298:41"
          }
        ],
        "id": 10100,
        "name": "ContractDefinition",
        "src": "300:10368:41"
      }
    ],
    "id": 10101,
    "name": "SourceUnit",
    "src": "0:10669:41"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-02T23:10:02.104Z"
}