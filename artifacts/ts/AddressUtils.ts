export const AddressUtils = 
{
  "contractName": "AddressUtils",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058207d4ae8903d0f5c1bb16e68e0a0bbf6cd94ae95945ae843d430f11d7f824cf1b00029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058207d4ae8903d0f5c1bb16e68e0a0bbf6cd94ae95945ae843d430f11d7f824cf1b00029",
  "sourceMap": "86:518:32:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "86:518:32:-;;;;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * Utility library of inline functions on addresses\n */\nlibrary AddressUtils {\n\n  /**\n   * Returns whether there is code in the target address\n   * @dev This function will return false if invoked during the constructor of a contract,\n   *  as the code is not actually created until after the constructor finishes.\n   * @param addr address address to check\n   * @return whether there is code in the target address\n   */\n  function isContract(address addr) internal view returns (bool) {\n    uint256 size;\n    assembly { size := extcodesize(addr) }\n    return size > 0;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/AddressUtils.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
    "exportedSymbols": {
      "AddressUtils": [
        10059
      ]
    },
    "id": 10060,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10042,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 10059,
        "linearizedBaseContracts": [
          10059
        ],
        "name": "AddressUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 10057,
              "nodeType": "Block",
              "src": "514:87:32",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10050,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 10058,
                      "src": "520:12:32",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10049,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "520:7:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10051,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "520:12:32"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 10050,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "549:4:32",
                        "valueSize": 1
                      }
                    },
                    {
                      "addr": {
                        "declaration": 10044,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "569:4:32",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 10052,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(addr)\n}",
                  "src": "538:49:32"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10055,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 10053,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10050,
                      "src": "588:4:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10054,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "595:1:32",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "588:8:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 10048,
                  "id": 10056,
                  "nodeType": "Return",
                  "src": "581:15:32"
                }
              ]
            },
            "documentation": "Returns whether there is code in the target address\n@dev This function will return false if invoked during the constructor of a contract,\n as the code is not actually created until after the constructor finishes.\n@param addr address address to check\n@return whether there is code in the target address",
            "id": 10058,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10044,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 10058,
                  "src": "471:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10043,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "471:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "470:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 10048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10047,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10058,
                  "src": "508:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10046,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "507:6:32"
            },
            "scope": 10059,
            "src": "451:150:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 10060,
        "src": "86:518:32"
      }
    ],
    "src": "0:605:32"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
    "exportedSymbols": {
      "AddressUtils": [
        10059
      ]
    },
    "id": 10060,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10042,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 10059,
        "linearizedBaseContracts": [
          10059
        ],
        "name": "AddressUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 10057,
              "nodeType": "Block",
              "src": "514:87:32",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10050,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 10058,
                      "src": "520:12:32",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10049,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "520:7:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10051,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "520:12:32"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 10050,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "549:4:32",
                        "valueSize": 1
                      }
                    },
                    {
                      "addr": {
                        "declaration": 10044,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "569:4:32",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 10052,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(addr)\n}",
                  "src": "538:49:32"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10055,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 10053,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10050,
                      "src": "588:4:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10054,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "595:1:32",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "588:8:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 10048,
                  "id": 10056,
                  "nodeType": "Return",
                  "src": "581:15:32"
                }
              ]
            },
            "documentation": "Returns whether there is code in the target address\n@dev This function will return false if invoked during the constructor of a contract,\n as the code is not actually created until after the constructor finishes.\n@param addr address address to check\n@return whether there is code in the target address",
            "id": 10058,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10044,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 10058,
                  "src": "471:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10043,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "471:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "470:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 10048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10047,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10058,
                  "src": "508:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10046,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "507:6:32"
            },
            "scope": 10059,
            "src": "451:150:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 10060,
        "src": "86:518:32"
      }
    ],
    "src": "0:605:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T08:15:10.668Z"
}