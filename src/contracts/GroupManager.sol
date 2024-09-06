// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GroupManager {
    struct Group {
        string name;
        address[] members;
    }

    mapping(uint => Group) public groups;
    uint public groupCount = 0;

    function createGroup(string memory _name, address[] memory _members) public {
        groupCount++;
        groups[groupCount] = Group(_name, _members);
    }
}
