export const ERC20Basic = 
{
  "contractName": "ERC20Basic",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
      "constant": true,
      "inputs": [
        {
          "name": "who",
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  function totalSupply() public view returns (uint256);\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        10200
      ]
    },
    "id": 10201,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10170,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 10200,
        "linearizedBaseContracts": [
          10200
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10175,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10171,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10173,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10175,
                  "src": "223:7:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10172,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:37"
            },
            "scope": 10200,
            "src": "179:53:37",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10182,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10177,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 10182,
                  "src": "254:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10180,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10182,
                  "src": "288:7:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10179,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:37"
            },
            "scope": 10200,
            "src": "235:62:37",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10191,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10184,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "318:10:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10186,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "330:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10185,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "361:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10188,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:37"
            },
            "scope": 10200,
            "src": "300:67:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10199,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10193,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10199,
                  "src": "385:20:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10195,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10199,
                  "src": "407:18:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10197,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10199,
                  "src": "427:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10196,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:37"
            },
            "src": "370:72:37"
          }
        ],
        "scope": 10201,
        "src": "155:289:37"
      }
    ],
    "src": "0:445:37"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        10200
      ]
    },
    "id": 10201,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10170,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 10200,
        "linearizedBaseContracts": [
          10200
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10175,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10171,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10173,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10175,
                  "src": "223:7:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10172,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:37"
            },
            "scope": 10200,
            "src": "179:53:37",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10182,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10177,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 10182,
                  "src": "254:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10180,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10182,
                  "src": "288:7:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10179,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:37"
            },
            "scope": 10200,
            "src": "235:62:37",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10191,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10184,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "318:10:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10186,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "330:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10185,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "361:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10188,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:37"
            },
            "scope": 10200,
            "src": "300:67:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10199,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10193,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10199,
                  "src": "385:20:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10195,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10199,
                  "src": "407:18:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10197,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10199,
                  "src": "427:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10196,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:37"
            },
            "src": "370:72:37"
          }
        ],
        "scope": 10201,
        "src": "155:289:37"
      }
    ],
    "src": "0:445:37"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-18T08:16:26.393Z"
}