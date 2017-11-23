export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
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
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
      "exportedSymbols": {
        "ERC20": [
          8957
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
        "id": 8916,
        "name": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "attributes": {
          "SourceUnit": 8990,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 8958,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8917,
        "name": "ImportDirective",
        "src": "26:26:34"
      },
      {
        "attributes": {
          "contractDependencies": [
            8989
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            8957,
            8989
          ],
          "name": "ERC20",
          "scope": 8958
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
                  "name": "ERC20Basic",
                  "referencedDeclaration": 8989,
                  "type": "contract ERC20Basic"
                },
                "id": 8918,
                "name": "UserDefinedTypeName",
                "src": "162:10:34"
              }
            ],
            "id": 8919,
            "name": "InheritanceSpecifier",
            "src": "162:10:34"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 8957,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "owner",
                      "scope": 8928,
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
                        "id": 8920,
                        "name": "ElementaryTypeName",
                        "src": "196:7:34"
                      }
                    ],
                    "id": 8921,
                    "name": "VariableDeclaration",
                    "src": "196:13:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 8928,
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
                        "id": 8922,
                        "name": "ElementaryTypeName",
                        "src": "211:7:34"
                      }
                    ],
                    "id": 8923,
                    "name": "VariableDeclaration",
                    "src": "211:15:34"
                  }
                ],
                "id": 8924,
                "name": "ParameterList",
                "src": "195:32:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8928,
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
                        "id": 8925,
                        "name": "ElementaryTypeName",
                        "src": "249:7:34"
                      }
                    ],
                    "id": 8926,
                    "name": "VariableDeclaration",
                    "src": "249:7:34"
                  }
                ],
                "id": 8927,
                "name": "ParameterList",
                "src": "248:9:34"
              }
            ],
            "id": 8928,
            "name": "FunctionDefinition",
            "src": "177:81:34"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 8957,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 8939,
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
                        "id": 8929,
                        "name": "ElementaryTypeName",
                        "src": "283:7:34"
                      }
                    ],
                    "id": 8930,
                    "name": "VariableDeclaration",
                    "src": "283:12:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 8939,
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
                        "id": 8931,
                        "name": "ElementaryTypeName",
                        "src": "297:7:34"
                      }
                    ],
                    "id": 8932,
                    "name": "VariableDeclaration",
                    "src": "297:10:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 8939,
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
                        "id": 8933,
                        "name": "ElementaryTypeName",
                        "src": "309:7:34"
                      }
                    ],
                    "id": 8934,
                    "name": "VariableDeclaration",
                    "src": "309:13:34"
                  }
                ],
                "id": 8935,
                "name": "ParameterList",
                "src": "282:41:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8939,
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
                        "id": 8936,
                        "name": "ElementaryTypeName",
                        "src": "340:4:34"
                      }
                    ],
                    "id": 8937,
                    "name": "VariableDeclaration",
                    "src": "340:4:34"
                  }
                ],
                "id": 8938,
                "name": "ParameterList",
                "src": "339:6:34"
              }
            ],
            "id": 8939,
            "name": "FunctionDefinition",
            "src": "261:85:34"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 8957,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 8948,
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
                        "id": 8940,
                        "name": "ElementaryTypeName",
                        "src": "366:7:34"
                      }
                    ],
                    "id": 8941,
                    "name": "VariableDeclaration",
                    "src": "366:15:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 8948,
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
                        "id": 8942,
                        "name": "ElementaryTypeName",
                        "src": "383:7:34"
                      }
                    ],
                    "id": 8943,
                    "name": "VariableDeclaration",
                    "src": "383:13:34"
                  }
                ],
                "id": 8944,
                "name": "ParameterList",
                "src": "365:32:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8948,
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
                        "id": 8945,
                        "name": "ElementaryTypeName",
                        "src": "414:4:34"
                      }
                    ],
                    "id": 8946,
                    "name": "VariableDeclaration",
                    "src": "414:4:34"
                  }
                ],
                "id": 8947,
                "name": "ParameterList",
                "src": "413:6:34"
              }
            ],
            "id": 8948,
            "name": "FunctionDefinition",
            "src": "349:71:34"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "owner",
                      "scope": 8956,
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
                        "id": 8949,
                        "name": "ElementaryTypeName",
                        "src": "438:7:34"
                      }
                    ],
                    "id": 8950,
                    "name": "VariableDeclaration",
                    "src": "438:21:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 8956,
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
                        "id": 8951,
                        "name": "ElementaryTypeName",
                        "src": "461:7:34"
                      }
                    ],
                    "id": 8952,
                    "name": "VariableDeclaration",
                    "src": "461:23:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 8956,
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
                        "id": 8953,
                        "name": "ElementaryTypeName",
                        "src": "486:7:34"
                      }
                    ],
                    "id": 8954,
                    "name": "VariableDeclaration",
                    "src": "486:13:34"
                  }
                ],
                "id": 8955,
                "name": "ParameterList",
                "src": "437:63:34"
              }
            ],
            "id": 8956,
            "name": "EventDefinition",
            "src": "423:78:34"
          }
        ],
        "id": 8957,
        "name": "ContractDefinition",
        "src": "144:359:34"
      }
    ],
    "id": 8958,
    "name": "SourceUnit",
    "src": "0:504:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-02T23:10:02.096Z"
}