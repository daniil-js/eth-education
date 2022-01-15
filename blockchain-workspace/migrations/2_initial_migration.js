const SafeMath = artifacts.require("SafeMath");
const BestCoin = artifacts.require("BestCoin");


module.exports = function (deployer) {
  deployer.deploy(SafeMath).then(function () {
    return deployer.deploy(BestCoin, 20000);
  });
}