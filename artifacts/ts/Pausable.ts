export const Pausable = 
{
  "contractName": "Pausable",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
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
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104a08061006d6000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100725780635c975abb146100895780638456cb59146100b85780638da5cb5b146100cf578063f2fde38b14610126575b600080fd5b34801561007e57600080fd5b50610087610169565b005b34801561009557600080fd5b5061009e610227565b604051808215151515815260200191505060405180910390f35b3480156100c457600080fd5b506100cd61023a565b005b3480156100db57600080fd5b506100e46102fa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013257600080fd5b50610167600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061031f565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101c457600080fd5b600060149054906101000a900460ff1615156101df57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561029557600080fd5b600060149054906101000a900460ff161515156102b157600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561037a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103b657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058202cf4ed1c7303f3d3c811b99d35ff3e8f480a08c4941feeb154153991fa8bdebd0029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100725780635c975abb146100895780638456cb59146100b85780638da5cb5b146100cf578063f2fde38b14610126575b600080fd5b34801561007e57600080fd5b50610087610169565b005b34801561009557600080fd5b5061009e610227565b604051808215151515815260200191505060405180910390f35b3480156100c457600080fd5b506100cd61023a565b005b3480156100db57600080fd5b506100e46102fa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013257600080fd5b50610167600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061031f565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101c457600080fd5b600060149054906101000a900460ff1615156101df57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561029557600080fd5b600060149054906101000a900460ff161515156102b157600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561037a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103b657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058202cf4ed1c7303f3d3c811b99d35ff3e8f480a08c4941feeb154153991fa8bdebd0029",
  "sourceMap": "177:745:33:-;;;268:5;247:26;;;;;;;;;;;;;;;;;;;;509:10:35;501:5;;:18;;;;;;;;;;;;;;;;;;177:745:33;;;;;;",
  "deployedSourceMap": "177:745:33:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;833:87:33;;;;;;247:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:26:33;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;666:85:33;;;;;;238:20:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:35;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:169:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:33;653:5:35;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:33;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:35;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:33;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:35:-;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"../ownership/Ownable.sol\";\n\n\n/**\n * @title Pausable\n * @dev Base contract which allows children to implement an emergency stop mechanism.\n */\ncontract Pausable is Ownable {\n  event Pause();\n  event Unpause();\n\n  bool public paused = false;\n\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is not paused.\n   */\n  modifier whenNotPaused() {\n    require(!paused);\n    _;\n  }\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is paused.\n   */\n  modifier whenPaused() {\n    require(paused);\n    _;\n  }\n\n  /**\n   * @dev called by the owner to pause, triggers stopped state\n   */\n  function pause() onlyOwner whenNotPaused public {\n    paused = true;\n    Pause();\n  }\n\n  /**\n   * @dev called by the owner to unpause, returns to normal state\n   */\n  function unpause() onlyOwner whenPaused public {\n    paused = false;\n    Unpause();\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
    "exportedSymbols": {
      "Pausable": [
        10119
      ]
    },
    "id": 10120,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10061,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "../ownership/Ownable.sol",
        "id": 10062,
        "nodeType": "ImportDirective",
        "scope": 10120,
        "sourceUnit": 10274,
        "src": "27:34:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10063,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10273,
              "src": "198:7:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$10273",
                "typeString": "contract Ownable"
              }
            },
            "id": 10064,
            "nodeType": "InheritanceSpecifier",
            "src": "198:7:33"
          }
        ],
        "contractDependencies": [
          10273
        ],
        "contractKind": "contract",
        "documentation": "@title Pausable\n@dev Base contract which allows children to implement an emergency stop mechanism.",
        "fullyImplemented": true,
        "id": 10119,
        "linearizedBaseContracts": [
          10119,
          10273
        ],
        "name": "Pausable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 10066,
            "name": "Pause",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10065,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "221:2:33"
            },
            "src": "210:14:33"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10068,
            "name": "Unpause",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10067,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "240:2:33"
            },
            "src": "227:16:33"
          },
          {
            "constant": false,
            "id": 10071,
            "name": "paused",
            "nodeType": "VariableDeclaration",
            "scope": 10119,
            "src": "247:26:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 10069,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "247:4:33",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 10070,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "268:5:33",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 10079,
              "nodeType": "Block",
              "src": "401:34:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10075,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "415:7:33",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 10074,
                          "name": "paused",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10071,
                          "src": "416:6:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10073,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "407:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "407:16:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10077,
                  "nodeType": "ExpressionStatement",
                  "src": "407:16:33"
                },
                {
                  "id": 10078,
                  "nodeType": "PlaceholderStatement",
                  "src": "429:1:33"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is not paused.",
            "id": 10080,
            "name": "whenNotPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10072,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:33"
            },
            "src": "376:59:33",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10087,
              "nodeType": "Block",
              "src": "554:33:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10083,
                        "name": "paused",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10071,
                        "src": "568:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10082,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "560:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "560:15:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10085,
                  "nodeType": "ExpressionStatement",
                  "src": "560:15:33"
                },
                {
                  "id": 10086,
                  "nodeType": "PlaceholderStatement",
                  "src": "581:1:33"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is paused.",
            "id": 10088,
            "name": "whenPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10081,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "551:2:33"
            },
            "src": "532:55:33",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10102,
              "nodeType": "Block",
              "src": "714:37:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10095,
                      "name": "paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10071,
                      "src": "720:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 10096,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "729:4:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "720:13:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10098,
                  "nodeType": "ExpressionStatement",
                  "src": "720:13:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 10099,
                      "name": "Pause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10066,
                      "src": "739:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 10100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "739:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10101,
                  "nodeType": "ExpressionStatement",
                  "src": "739:7:33"
                }
              ]
            },
            "documentation": "@dev called by the owner to pause, triggers stopped state",
            "id": 10103,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10091,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10090,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10247,
                  "src": "683:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "683:9:33"
              },
              {
                "arguments": null,
                "id": 10093,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10092,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10080,
                  "src": "693:13:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "693:13:33"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10089,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "680:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 10094,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:0:33"
            },
            "scope": 10119,
            "src": "666:85:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10117,
              "nodeType": "Block",
              "src": "880:40:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10110,
                      "name": "paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10071,
                      "src": "886:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 10111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "895:5:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "886:14:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10113,
                  "nodeType": "ExpressionStatement",
                  "src": "886:14:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 10114,
                      "name": "Unpause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10068,
                      "src": "906:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 10115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "906:9:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10116,
                  "nodeType": "ExpressionStatement",
                  "src": "906:9:33"
                }
              ]
            },
            "documentation": "@dev called by the owner to unpause, returns to normal state",
            "id": 10118,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10106,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10105,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10247,
                  "src": "852:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "852:9:33"
              },
              {
                "arguments": null,
                "id": 10108,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10107,
                  "name": "whenPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10088,
                  "src": "862:10:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "862:10:33"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10104,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "849:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 10109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "880:0:33"
            },
            "scope": 10119,
            "src": "833:87:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10120,
        "src": "177:745:33"
      }
    ],
    "src": "0:923:33"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
    "exportedSymbols": {
      "Pausable": [
        10119
      ]
    },
    "id": 10120,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10061,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "../ownership/Ownable.sol",
        "id": 10062,
        "nodeType": "ImportDirective",
        "scope": 10120,
        "sourceUnit": 10274,
        "src": "27:34:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10063,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10273,
              "src": "198:7:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$10273",
                "typeString": "contract Ownable"
              }
            },
            "id": 10064,
            "nodeType": "InheritanceSpecifier",
            "src": "198:7:33"
          }
        ],
        "contractDependencies": [
          10273
        ],
        "contractKind": "contract",
        "documentation": "@title Pausable\n@dev Base contract which allows children to implement an emergency stop mechanism.",
        "fullyImplemented": true,
        "id": 10119,
        "linearizedBaseContracts": [
          10119,
          10273
        ],
        "name": "Pausable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 10066,
            "name": "Pause",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10065,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "221:2:33"
            },
            "src": "210:14:33"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10068,
            "name": "Unpause",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10067,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "240:2:33"
            },
            "src": "227:16:33"
          },
          {
            "constant": false,
            "id": 10071,
            "name": "paused",
            "nodeType": "VariableDeclaration",
            "scope": 10119,
            "src": "247:26:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 10069,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "247:4:33",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 10070,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "268:5:33",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 10079,
              "nodeType": "Block",
              "src": "401:34:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10075,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "415:7:33",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 10074,
                          "name": "paused",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10071,
                          "src": "416:6:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10073,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "407:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "407:16:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10077,
                  "nodeType": "ExpressionStatement",
                  "src": "407:16:33"
                },
                {
                  "id": 10078,
                  "nodeType": "PlaceholderStatement",
                  "src": "429:1:33"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is not paused.",
            "id": 10080,
            "name": "whenNotPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10072,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:33"
            },
            "src": "376:59:33",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10087,
              "nodeType": "Block",
              "src": "554:33:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10083,
                        "name": "paused",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10071,
                        "src": "568:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10082,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "560:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "560:15:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10085,
                  "nodeType": "ExpressionStatement",
                  "src": "560:15:33"
                },
                {
                  "id": 10086,
                  "nodeType": "PlaceholderStatement",
                  "src": "581:1:33"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is paused.",
            "id": 10088,
            "name": "whenPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10081,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "551:2:33"
            },
            "src": "532:55:33",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10102,
              "nodeType": "Block",
              "src": "714:37:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10095,
                      "name": "paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10071,
                      "src": "720:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 10096,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "729:4:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "720:13:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10098,
                  "nodeType": "ExpressionStatement",
                  "src": "720:13:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 10099,
                      "name": "Pause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10066,
                      "src": "739:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 10100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "739:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10101,
                  "nodeType": "ExpressionStatement",
                  "src": "739:7:33"
                }
              ]
            },
            "documentation": "@dev called by the owner to pause, triggers stopped state",
            "id": 10103,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10091,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10090,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10247,
                  "src": "683:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "683:9:33"
              },
              {
                "arguments": null,
                "id": 10093,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10092,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10080,
                  "src": "693:13:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "693:13:33"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10089,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "680:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 10094,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:0:33"
            },
            "scope": 10119,
            "src": "666:85:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10117,
              "nodeType": "Block",
              "src": "880:40:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10110,
                      "name": "paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10071,
                      "src": "886:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 10111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "895:5:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "886:14:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10113,
                  "nodeType": "ExpressionStatement",
                  "src": "886:14:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 10114,
                      "name": "Unpause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10068,
                      "src": "906:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 10115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "906:9:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10116,
                  "nodeType": "ExpressionStatement",
                  "src": "906:9:33"
                }
              ]
            },
            "documentation": "@dev called by the owner to unpause, returns to normal state",
            "id": 10118,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10106,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10105,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10247,
                  "src": "852:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "852:9:33"
              },
              {
                "arguments": null,
                "id": 10108,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10107,
                  "name": "whenPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10088,
                  "src": "862:10:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "862:10:33"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10104,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "849:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 10109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "880:0:33"
            },
            "scope": 10119,
            "src": "833:87:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10120,
        "src": "177:745:33"
      }
    ],
    "src": "0:923:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T08:05:01.657Z"
}