// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";

contract GustavoCoin is ERC20Mintable {
    string public name = "GUSTAVO COIN";
    string public symbol = "GUS";
    uint8 public decimals = 18;
}
