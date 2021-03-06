export const Migrations = 
{
  "contractName": "Migrations",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
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
      "inputs": [],
      "name": "owner",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "completed",
          "type": "uint256"
        }
      ],
      "name": "setCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102f8806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a72305820babeb5a587751e30d4137164aaa89a0f37b8d013181ddf554578131c2fe5f89f0029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a72305820babeb5a587751e30d4137164aaa89a0f37b8d013181ddf554578131c2fe5f89f0029",
  "sourceMap": "26:579:7:-;;;245:64;8:9:-1;5:2;;;30:1;27;20:12;5:2;245:64:7;292:10;284:5;;:18;;;;;;;;;;;;;;;;;;26:579;;;;;;",
  "deployedSourceMap": "26:579:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;;8:9:-1;5:2;;;30:1;27;20:12;5:2;430:173:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;131:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;131:36:7;;;;;;;;;;;;;;;;;;;;;;;52:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;52:20:7;;;;;;;;;;;;;;;;;;;;;;;;;;;315:109;;8:9:-1;5:2;;;30:1;27;20:12;5:2;315:109:7;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;495:19;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;528:10;495:44;;549:8;:21;;;571:24;;549:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;549:47:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;549:47:7;;;;206:26;430:173;;:::o;131:36::-;;;;:::o;52:20::-;;;;;;;;;;;;;:::o;315:109::-;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;408:9;381:24;:36;;;;206:26;315:109;:::o",
  "source": "pragma solidity 0.4.24;\n\n\ncontract Migrations {\n    address public owner;\n\n    // solhint-disable-next-line var-name-mixedcase\n    uint public last_completed_migration;\n\n    modifier restricted() {\n        if (msg.sender == owner) _;\n    }\n\n    function Migrations() public {\n        owner = msg.sender;\n    }\n\n    function setCompleted(uint completed) public restricted {\n        last_completed_migration = completed;\n    }\n\n    function upgrade(address newAddress) public restricted {\n        Migrations upgraded = Migrations(newAddress);\n        upgraded.setCompleted(last_completed_migration);\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/Migrations.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        3958
      ]
    },
    "id": 3959,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3903,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:7"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 3958,
        "linearizedBaseContracts": [
          3958
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3905,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 3958,
            "src": "52:20:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 3904,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "52:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3907,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 3958,
            "src": "131:36:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3906,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "131:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3915,
              "nodeType": "Block",
              "src": "196:43:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3909,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11958,
                        "src": "210:3:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 3910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "210:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 3911,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3905,
                      "src": "224:5:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "210:19:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3914,
                  "nodeType": "IfStatement",
                  "src": "206:26:7",
                  "trueBody": {
                    "id": 3913,
                    "nodeType": "PlaceholderStatement",
                    "src": "231:1:7"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 3916,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 3908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "193:2:7"
            },
            "src": "174:65:7",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3924,
              "nodeType": "Block",
              "src": "274:35:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3919,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3905,
                      "src": "284:5:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3920,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11958,
                        "src": "292:3:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 3921,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "292:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "284:18:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3923,
                  "nodeType": "ExpressionStatement",
                  "src": "284:18:7"
                }
              ]
            },
            "documentation": null,
            "id": 3925,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Migrations",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3917,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "264:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 3918,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:7"
            },
            "scope": 3958,
            "src": "245:64:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3936,
              "nodeType": "Block",
              "src": "371:53:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3932,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3907,
                      "src": "381:24:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3933,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3927,
                      "src": "408:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "381:36:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3935,
                  "nodeType": "ExpressionStatement",
                  "src": "381:36:7"
                }
              ]
            },
            "documentation": null,
            "id": 3937,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3930,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3929,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3916,
                  "src": "360:10:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "360:10:7"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3927,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 3937,
                  "src": "337:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3926,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 3931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "371:0:7"
            },
            "scope": 3958,
            "src": "315:109:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3956,
              "nodeType": "Block",
              "src": "485:118:7",
              "statements": [
                {
                  "assignments": [
                    3945
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3945,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 3957,
                      "src": "495:19:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$3958",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3944,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3958,
                        "src": "495:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$3958",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3949,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3947,
                        "name": "newAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3939,
                        "src": "528:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3946,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3958,
                      "src": "517:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$3958_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 3948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "517:22:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$3958",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "495:44:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3953,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3907,
                        "src": "571:24:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3950,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3945,
                        "src": "549:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$3958",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 3952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3937,
                      "src": "549:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 3954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "549:47:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3955,
                  "nodeType": "ExpressionStatement",
                  "src": "549:47:7"
                }
              ]
            },
            "documentation": null,
            "id": 3957,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3942,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3941,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3916,
                  "src": "474:10:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "474:10:7"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3939,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 3957,
                  "src": "447:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3938,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:20:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 3943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "485:0:7"
            },
            "scope": 3958,
            "src": "430:173:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3959,
        "src": "26:579:7"
      }
    ],
    "src": "0:606:7"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        3958
      ]
    },
    "id": 3959,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3903,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:7"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 3958,
        "linearizedBaseContracts": [
          3958
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3905,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 3958,
            "src": "52:20:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 3904,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "52:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3907,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 3958,
            "src": "131:36:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3906,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "131:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3915,
              "nodeType": "Block",
              "src": "196:43:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3909,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11958,
                        "src": "210:3:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 3910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "210:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 3911,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3905,
                      "src": "224:5:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "210:19:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3914,
                  "nodeType": "IfStatement",
                  "src": "206:26:7",
                  "trueBody": {
                    "id": 3913,
                    "nodeType": "PlaceholderStatement",
                    "src": "231:1:7"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 3916,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 3908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "193:2:7"
            },
            "src": "174:65:7",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3924,
              "nodeType": "Block",
              "src": "274:35:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3919,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3905,
                      "src": "284:5:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3920,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11958,
                        "src": "292:3:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 3921,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "292:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "284:18:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3923,
                  "nodeType": "ExpressionStatement",
                  "src": "284:18:7"
                }
              ]
            },
            "documentation": null,
            "id": 3925,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Migrations",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3917,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "264:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 3918,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:7"
            },
            "scope": 3958,
            "src": "245:64:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3936,
              "nodeType": "Block",
              "src": "371:53:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3932,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3907,
                      "src": "381:24:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3933,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3927,
                      "src": "408:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "381:36:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3935,
                  "nodeType": "ExpressionStatement",
                  "src": "381:36:7"
                }
              ]
            },
            "documentation": null,
            "id": 3937,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3930,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3929,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3916,
                  "src": "360:10:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "360:10:7"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3927,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 3937,
                  "src": "337:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3926,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 3931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "371:0:7"
            },
            "scope": 3958,
            "src": "315:109:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3956,
              "nodeType": "Block",
              "src": "485:118:7",
              "statements": [
                {
                  "assignments": [
                    3945
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3945,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 3957,
                      "src": "495:19:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$3958",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3944,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3958,
                        "src": "495:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$3958",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3949,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3947,
                        "name": "newAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3939,
                        "src": "528:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3946,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3958,
                      "src": "517:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$3958_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 3948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "517:22:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$3958",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "495:44:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3953,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3907,
                        "src": "571:24:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3950,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3945,
                        "src": "549:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$3958",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 3952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3937,
                      "src": "549:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 3954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "549:47:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3955,
                  "nodeType": "ExpressionStatement",
                  "src": "549:47:7"
                }
              ]
            },
            "documentation": null,
            "id": 3957,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3942,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3941,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3916,
                  "src": "474:10:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "474:10:7"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3939,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 3957,
                  "src": "447:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3938,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:20:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 3943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "485:0:7"
            },
            "scope": 3958,
            "src": "430:173:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3959,
        "src": "26:579:7"
      }
    ],
    "src": "0:606:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T08:05:20.731Z"
}