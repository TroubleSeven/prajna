export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "Authorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "AuthorizationRevoked",
      "type": "event"
    }
  ],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820aa3874a0f801bf516329ac65c725e3653404e2293912255063d90fd4072658a10029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820aa3874a0f801bf516329ac65c725e3653404e2293912255063d90fd4072658a10029",
  "sourceMap": "1157:2653:14:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "1157:2653:14:-;;;;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\n\n/**\n *  Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n *  depend on the library must also define the events in order for web3 clients to pick them up.\n *  This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n *  https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736\n */\ncontract PermissionEvents {\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n}\n\n\nlibrary PermissionsLib {\n\n    // TODO(kayvon): remove these events and inherit from PermissionEvents when libraries are\n    // capable of inheritance.\n    // See relevant github issue here: https://github.com/ethereum/solidity/issues/891\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n        Authorized(agent, callingContext);\n    }\n\n    function revokeAuthorization(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n\n        AuthorizationRevoked(agent, callingContext);\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/jackyshen/prajna/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "absolutePath": "/Users/jackyshen/prajna/contracts/libraries/PermissionsLib.sol",
    "exportedSymbols": {
      "PermissionEvents": [
        5436
      ],
      "PermissionsLib": [
        5640
      ]
    },
    "id": 5641,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5423,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:14"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": " Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n depend on the library must also define the events in order for web3 clients to pick them up.\n This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736",
        "fullyImplemented": true,
        "id": 5436,
        "linearizedBaseContracts": [
          5436
        ],
        "name": "PermissionEvents",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 5429,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5425,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5429,
                  "src": "1028:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5424,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:14",
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
                  "id": 5427,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5429,
                  "src": "1051:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5426,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1027:46:14"
            },
            "src": "1011:63:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5435,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5431,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5435,
                  "src": "1106:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5430,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:14",
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
                  "id": 5433,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5435,
                  "src": "1129:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5432,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1105:46:14"
            },
            "src": "1079:73:14"
          }
        ],
        "scope": 5641,
        "src": "979:175:14"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5640,
        "linearizedBaseContracts": [
          5640
        ],
        "name": "PermissionsLib",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 5442,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5438,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5442,
                  "src": "1416:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5437,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1416:7:14",
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
                  "id": 5440,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5442,
                  "src": "1439:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5439,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1439:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1415:46:14"
            },
            "src": "1399:63:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5448,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5444,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5448,
                  "src": "1494:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1494:7:14",
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
                  "id": 5446,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5448,
                  "src": "1517:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5445,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1517:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1493:46:14"
            },
            "src": "1467:73:14"
          },
          {
            "canonicalName": "PermissionsLib.Permissions",
            "id": 5460,
            "members": [
              {
                "constant": false,
                "id": 5452,
                "name": "authorized",
                "nodeType": "VariableDeclaration",
                "scope": 5460,
                "src": "1575:36:14",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 5451,
                  "keyType": {
                    "id": 5449,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1584:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1575:25:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 5450,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1595:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5456,
                "name": "agentToIndex",
                "nodeType": "VariableDeclaration",
                "scope": 5460,
                "src": "1621:38:14",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 5455,
                  "keyType": {
                    "id": 5453,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1630:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1621:25:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 5454,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1641:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5459,
                "name": "authorizedAgents",
                "nodeType": "VariableDeclaration",
                "scope": 5460,
                "src": "1693:26:14",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 5457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1693:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5458,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "1693:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permissions",
            "nodeType": "StructDefinition",
            "scope": 5640,
            "src": "1546:180:14",
            "visibility": "public"
          },
          {
            "body": {
              "id": 5509,
              "nodeType": "Block",
              "src": "1866:249:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5471,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5462,
                            "src": "1900:4:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 5472,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5464,
                            "src": "1906:5:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5470,
                          "name": "isNotAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5627,
                          "src": "1884:15:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 5473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1884:28:14",
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
                      "id": 5469,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "1876:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1876:37:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5475,
                  "nodeType": "ExpressionStatement",
                  "src": "1876:37:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5476,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5462,
                          "src": "1924:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5479,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5452,
                        "src": "1924:15:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 5480,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5478,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "1940:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1924:22:14",
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
                      "id": 5481,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1949:4:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1924:29:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5483,
                  "nodeType": "ExpressionStatement",
                  "src": "1924:29:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5489,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "1990:5:14",
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
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5484,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5462,
                          "src": "1963:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5487,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "1963:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1963:26:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 5490,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1963:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5491,
                  "nodeType": "ExpressionStatement",
                  "src": "1963:33:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5492,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5462,
                          "src": "2006:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5495,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5456,
                        "src": "2006:17:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5496,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5494,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "2024:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2006:24:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5501,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5497,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5462,
                            "src": "2033:4:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          "id": 5498,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "authorizedAgents",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5459,
                          "src": "2033:21:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 5499,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2033:28:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 5500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2064:1:14",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2033:32:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2006:59:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5503,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:59:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5505,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "2086:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5506,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5466,
                        "src": "2093:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5504,
                      "name": "Authorized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5442,
                      "src": "2075:10:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 5507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2075:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5508,
                  "nodeType": "ExpressionStatement",
                  "src": "2075:33:14"
                }
              ]
            },
            "documentation": null,
            "id": 5510,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorize",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5462,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1760:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5461,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "1760:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5464,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1794:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5463,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:14",
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
                  "id": 5466,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1817:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5465,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1817:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1750:94:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5468,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1866:0:14"
            },
            "scope": 5640,
            "src": "1732:383:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5595,
              "nodeType": "Block",
              "src": "2265:1024:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5521,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5512,
                            "src": "2465:4:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 5522,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5514,
                            "src": "2471:5:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5520,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5611,
                          "src": "2452:12:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 5523,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2452:25:14",
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
                      "id": 5519,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "2444:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2444:34:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5525,
                  "nodeType": "ExpressionStatement",
                  "src": "2444:34:14"
                },
                {
                  "assignments": [
                    5527
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5527,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "VariableDeclaration",
                      "scope": 5596,
                      "src": "2489:25:14",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5526,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2489:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5532,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5528,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5512,
                        "src": "2517:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 5529,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "agentToIndex",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5456,
                      "src": "2517:17:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 5531,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5530,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5514,
                      "src": "2535:5:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2517:24:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2489:52:14"
                },
                {
                  "assignments": [
                    5534
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5534,
                      "name": "indexOfAgentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 5596,
                      "src": "2551:23:14",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5533,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2551:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5540,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5535,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2577:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5536,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "2577:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5537,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2577:28:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 5538,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2608:1:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2577:32:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2551:58:14"
                },
                {
                  "assignments": [
                    5542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5542,
                      "name": "agentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 5596,
                      "src": "2619:19:14",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 5541,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2619:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5547,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5543,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5512,
                        "src": "2641:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 5544,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5459,
                      "src": "2641:21:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 5546,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5545,
                      "name": "indexOfAgentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5534,
                      "src": "2663:18:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2641:41:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2619:63:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "2738:29:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5548,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2745:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5549,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5452,
                        "src": "2745:15:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 5551,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5550,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5514,
                        "src": "2761:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2745:22:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5553,
                  "nodeType": "ExpressionStatement",
                  "src": "2738:29:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5554,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2848:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5557,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "2848:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5558,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5556,
                        "name": "indexOfAgentToRevoke",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5527,
                        "src": "2870:20:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2848:43:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5559,
                      "name": "agentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5542,
                      "src": "2894:11:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2848:57:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5561,
                  "nodeType": "ExpressionStatement",
                  "src": "2848:57:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5562,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2976:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5565,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5456,
                        "src": "2976:17:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5566,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5564,
                        "name": "agentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5542,
                        "src": "2994:11:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2976:30:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5567,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5527,
                      "src": "3009:20:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2976:53:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5569,
                  "nodeType": "ExpressionStatement",
                  "src": "2976:53:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3039:31:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5570,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "3046:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5571,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5456,
                        "src": "3046:17:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5573,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5572,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5514,
                        "src": "3064:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3046:24:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5575,
                  "nodeType": "ExpressionStatement",
                  "src": "3039:31:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3137:48:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5576,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "3144:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5577,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "3144:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5579,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5578,
                        "name": "indexOfAgentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5534,
                        "src": "3166:18:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3144:41:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5581,
                  "nodeType": "ExpressionStatement",
                  "src": "3137:48:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5582,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "3195:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5585,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "3195:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5586,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3195:28:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 5587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3227:1:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3195:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5589,
                  "nodeType": "ExpressionStatement",
                  "src": "3195:33:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5591,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5514,
                        "src": "3260:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5592,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5516,
                        "src": "3267:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5590,
                      "name": "AuthorizationRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5448,
                      "src": "3239:20:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 5593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3239:43:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5594,
                  "nodeType": "ExpressionStatement",
                  "src": "3239:43:14"
                }
              ]
            },
            "documentation": null,
            "id": 5596,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5512,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "2159:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5511,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "2159:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5514,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "2193:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5513,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2193:7:14",
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
                  "id": 5516,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "2216:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5515,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2216:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2149:94:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5518,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2265:0:14"
            },
            "scope": 5640,
            "src": "2121:1168:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5610,
              "nodeType": "Block",
              "src": "3415:46:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5605,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5598,
                        "src": "3432:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 5606,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5452,
                      "src": "3432:15:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 5608,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5607,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5600,
                      "src": "3448:5:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3432:22:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5604,
                  "id": 5609,
                  "nodeType": "Return",
                  "src": "3425:29:14"
                }
              ]
            },
            "documentation": null,
            "id": 5611,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5598,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5611,
                  "src": "3317:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5597,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "3317:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5600,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5611,
                  "src": "3343:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5599,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3343:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3316:41:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5603,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5611,
                  "src": "3405:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5602,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3405:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3404:6:14"
            },
            "scope": 5640,
            "src": "3295:166:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5626,
              "nodeType": "Block",
              "src": "3590:50:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3607:26:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5621,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5613,
                          "src": "3621:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 5622,
                          "name": "agent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5615,
                          "src": "3627:5:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 5620,
                        "name": "isAuthorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5611,
                        "src": "3608:12:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                        }
                      },
                      "id": 5623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3608:25:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5619,
                  "id": 5625,
                  "nodeType": "Return",
                  "src": "3600:33:14"
                }
              ]
            },
            "documentation": null,
            "id": 5627,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isNotAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5613,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5627,
                  "src": "3492:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5612,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "3492:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5615,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5627,
                  "src": "3518:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5614,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3518:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3491:41:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5618,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5627,
                  "src": "3580:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5617,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3580:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3579:6:14"
            },
            "scope": 5640,
            "src": "3467:173:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5638,
              "nodeType": "Block",
              "src": "3763:45:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 5635,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5629,
                      "src": "3780:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                        "typeString": "struct PermissionsLib.Permissions storage pointer"
                      }
                    },
                    "id": 5636,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "authorizedAgents",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 5459,
                    "src": "3780:21:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 5634,
                  "id": 5637,
                  "nodeType": "Return",
                  "src": "3773:28:14"
                }
              ]
            },
            "documentation": null,
            "id": 5639,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5629,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5639,
                  "src": "3675:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5628,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "3675:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3674:26:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5633,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5639,
                  "src": "3748:9:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5631,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3748:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5632,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3748:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3747:11:14"
            },
            "scope": 5640,
            "src": "3646:162:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 5641,
        "src": "1157:2653:14"
      }
    ],
    "src": "584:3227:14"
  },
  "legacyAST": {
    "absolutePath": "/Users/jackyshen/prajna/contracts/libraries/PermissionsLib.sol",
    "exportedSymbols": {
      "PermissionEvents": [
        5436
      ],
      "PermissionsLib": [
        5640
      ]
    },
    "id": 5641,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5423,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:14"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": " Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n depend on the library must also define the events in order for web3 clients to pick them up.\n This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736",
        "fullyImplemented": true,
        "id": 5436,
        "linearizedBaseContracts": [
          5436
        ],
        "name": "PermissionEvents",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 5429,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5425,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5429,
                  "src": "1028:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5424,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:14",
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
                  "id": 5427,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5429,
                  "src": "1051:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5426,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1027:46:14"
            },
            "src": "1011:63:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5435,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5431,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5435,
                  "src": "1106:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5430,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:14",
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
                  "id": 5433,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5435,
                  "src": "1129:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5432,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1105:46:14"
            },
            "src": "1079:73:14"
          }
        ],
        "scope": 5641,
        "src": "979:175:14"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5640,
        "linearizedBaseContracts": [
          5640
        ],
        "name": "PermissionsLib",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 5442,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5438,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5442,
                  "src": "1416:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5437,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1416:7:14",
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
                  "id": 5440,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5442,
                  "src": "1439:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5439,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1439:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1415:46:14"
            },
            "src": "1399:63:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5448,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5444,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5448,
                  "src": "1494:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1494:7:14",
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
                  "id": 5446,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5448,
                  "src": "1517:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5445,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1517:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1493:46:14"
            },
            "src": "1467:73:14"
          },
          {
            "canonicalName": "PermissionsLib.Permissions",
            "id": 5460,
            "members": [
              {
                "constant": false,
                "id": 5452,
                "name": "authorized",
                "nodeType": "VariableDeclaration",
                "scope": 5460,
                "src": "1575:36:14",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 5451,
                  "keyType": {
                    "id": 5449,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1584:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1575:25:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 5450,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1595:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5456,
                "name": "agentToIndex",
                "nodeType": "VariableDeclaration",
                "scope": 5460,
                "src": "1621:38:14",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 5455,
                  "keyType": {
                    "id": 5453,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1630:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1621:25:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 5454,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1641:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5459,
                "name": "authorizedAgents",
                "nodeType": "VariableDeclaration",
                "scope": 5460,
                "src": "1693:26:14",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 5457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1693:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5458,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "1693:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permissions",
            "nodeType": "StructDefinition",
            "scope": 5640,
            "src": "1546:180:14",
            "visibility": "public"
          },
          {
            "body": {
              "id": 5509,
              "nodeType": "Block",
              "src": "1866:249:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5471,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5462,
                            "src": "1900:4:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 5472,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5464,
                            "src": "1906:5:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5470,
                          "name": "isNotAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5627,
                          "src": "1884:15:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 5473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1884:28:14",
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
                      "id": 5469,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "1876:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1876:37:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5475,
                  "nodeType": "ExpressionStatement",
                  "src": "1876:37:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5476,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5462,
                          "src": "1924:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5479,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5452,
                        "src": "1924:15:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 5480,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5478,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "1940:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1924:22:14",
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
                      "id": 5481,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1949:4:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1924:29:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5483,
                  "nodeType": "ExpressionStatement",
                  "src": "1924:29:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5489,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "1990:5:14",
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
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5484,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5462,
                          "src": "1963:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5487,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "1963:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1963:26:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 5490,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1963:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5491,
                  "nodeType": "ExpressionStatement",
                  "src": "1963:33:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5492,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5462,
                          "src": "2006:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5495,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5456,
                        "src": "2006:17:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5496,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5494,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "2024:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2006:24:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5501,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5497,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5462,
                            "src": "2033:4:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          "id": 5498,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "authorizedAgents",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5459,
                          "src": "2033:21:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 5499,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2033:28:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 5500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2064:1:14",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2033:32:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2006:59:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5503,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:59:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5505,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5464,
                        "src": "2086:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5506,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5466,
                        "src": "2093:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5504,
                      "name": "Authorized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5442,
                      "src": "2075:10:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 5507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2075:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5508,
                  "nodeType": "ExpressionStatement",
                  "src": "2075:33:14"
                }
              ]
            },
            "documentation": null,
            "id": 5510,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorize",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5462,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1760:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5461,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "1760:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5464,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1794:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5463,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:14",
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
                  "id": 5466,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1817:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5465,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1817:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1750:94:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5468,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1866:0:14"
            },
            "scope": 5640,
            "src": "1732:383:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5595,
              "nodeType": "Block",
              "src": "2265:1024:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5521,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5512,
                            "src": "2465:4:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 5522,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5514,
                            "src": "2471:5:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5520,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5611,
                          "src": "2452:12:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 5523,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2452:25:14",
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
                      "id": 5519,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "2444:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2444:34:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5525,
                  "nodeType": "ExpressionStatement",
                  "src": "2444:34:14"
                },
                {
                  "assignments": [
                    5527
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5527,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "VariableDeclaration",
                      "scope": 5596,
                      "src": "2489:25:14",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5526,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2489:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5532,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5528,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5512,
                        "src": "2517:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 5529,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "agentToIndex",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5456,
                      "src": "2517:17:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 5531,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5530,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5514,
                      "src": "2535:5:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2517:24:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2489:52:14"
                },
                {
                  "assignments": [
                    5534
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5534,
                      "name": "indexOfAgentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 5596,
                      "src": "2551:23:14",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5533,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2551:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5540,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5535,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2577:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5536,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "2577:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5537,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2577:28:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 5538,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2608:1:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2577:32:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2551:58:14"
                },
                {
                  "assignments": [
                    5542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5542,
                      "name": "agentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 5596,
                      "src": "2619:19:14",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 5541,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2619:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5547,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5543,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5512,
                        "src": "2641:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 5544,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5459,
                      "src": "2641:21:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 5546,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5545,
                      "name": "indexOfAgentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5534,
                      "src": "2663:18:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2641:41:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2619:63:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "2738:29:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5548,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2745:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5549,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5452,
                        "src": "2745:15:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 5551,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5550,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5514,
                        "src": "2761:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2745:22:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5553,
                  "nodeType": "ExpressionStatement",
                  "src": "2738:29:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5554,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2848:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5557,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "2848:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5558,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5556,
                        "name": "indexOfAgentToRevoke",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5527,
                        "src": "2870:20:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2848:43:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5559,
                      "name": "agentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5542,
                      "src": "2894:11:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2848:57:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5561,
                  "nodeType": "ExpressionStatement",
                  "src": "2848:57:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5562,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "2976:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5565,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5456,
                        "src": "2976:17:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5566,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5564,
                        "name": "agentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5542,
                        "src": "2994:11:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2976:30:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5567,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5527,
                      "src": "3009:20:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2976:53:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5569,
                  "nodeType": "ExpressionStatement",
                  "src": "2976:53:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3039:31:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5570,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "3046:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5571,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5456,
                        "src": "3046:17:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5573,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5572,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5514,
                        "src": "3064:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3046:24:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5575,
                  "nodeType": "ExpressionStatement",
                  "src": "3039:31:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3137:48:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5576,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "3144:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5577,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "3144:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5579,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5578,
                        "name": "indexOfAgentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5534,
                        "src": "3166:18:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3144:41:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5581,
                  "nodeType": "ExpressionStatement",
                  "src": "3137:48:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5582,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5512,
                          "src": "3195:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 5585,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5459,
                        "src": "3195:21:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5586,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3195:28:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 5587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3227:1:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3195:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5589,
                  "nodeType": "ExpressionStatement",
                  "src": "3195:33:14"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5591,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5514,
                        "src": "3260:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5592,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5516,
                        "src": "3267:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5590,
                      "name": "AuthorizationRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5448,
                      "src": "3239:20:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 5593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3239:43:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5594,
                  "nodeType": "ExpressionStatement",
                  "src": "3239:43:14"
                }
              ]
            },
            "documentation": null,
            "id": 5596,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5512,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "2159:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5511,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "2159:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5514,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "2193:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5513,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2193:7:14",
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
                  "id": 5516,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "2216:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5515,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2216:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2149:94:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5518,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2265:0:14"
            },
            "scope": 5640,
            "src": "2121:1168:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5610,
              "nodeType": "Block",
              "src": "3415:46:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5605,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5598,
                        "src": "3432:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 5606,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5452,
                      "src": "3432:15:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 5608,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5607,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5600,
                      "src": "3448:5:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3432:22:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5604,
                  "id": 5609,
                  "nodeType": "Return",
                  "src": "3425:29:14"
                }
              ]
            },
            "documentation": null,
            "id": 5611,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5598,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5611,
                  "src": "3317:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5597,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "3317:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5600,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5611,
                  "src": "3343:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5599,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3343:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3316:41:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5603,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5611,
                  "src": "3405:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5602,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3405:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3404:6:14"
            },
            "scope": 5640,
            "src": "3295:166:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5626,
              "nodeType": "Block",
              "src": "3590:50:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3607:26:14",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5621,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5613,
                          "src": "3621:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 5622,
                          "name": "agent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5615,
                          "src": "3627:5:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 5620,
                        "name": "isAuthorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5611,
                        "src": "3608:12:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                        }
                      },
                      "id": 5623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3608:25:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5619,
                  "id": 5625,
                  "nodeType": "Return",
                  "src": "3600:33:14"
                }
              ]
            },
            "documentation": null,
            "id": 5627,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isNotAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5613,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5627,
                  "src": "3492:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5612,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "3492:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5615,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5627,
                  "src": "3518:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5614,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3518:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3491:41:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5618,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5627,
                  "src": "3580:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5617,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3580:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3579:6:14"
            },
            "scope": 5640,
            "src": "3467:173:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5638,
              "nodeType": "Block",
              "src": "3763:45:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 5635,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5629,
                      "src": "3780:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                        "typeString": "struct PermissionsLib.Permissions storage pointer"
                      }
                    },
                    "id": 5636,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "authorizedAgents",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 5459,
                    "src": "3780:21:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 5634,
                  "id": 5637,
                  "nodeType": "Return",
                  "src": "3773:28:14"
                }
              ]
            },
            "documentation": null,
            "id": 5639,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5629,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 5639,
                  "src": "3675:24:14",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 5628,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 5460,
                    "src": "3675:11:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3674:26:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5633,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5639,
                  "src": "3748:9:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5631,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3748:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5632,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3748:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3747:11:14"
            },
            "scope": 5640,
            "src": "3646:162:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 5641,
        "src": "1157:2653:14"
      }
    ],
    "src": "584:3227:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {},
      "links": {},
      "address": "0x8113ccec005cc9a6ae8f244e66a40e118a329a62",
      "transactionHash": "0xafe22bce383fa6c2fb81ddce068fc5f3ac2791cc98676850dbbd3ec05473ea4f"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T08:40:55.523Z"
}