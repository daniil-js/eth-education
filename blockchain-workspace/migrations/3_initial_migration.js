const BestCoinV2 = artifacts.require("BestCoinV2");

module.exports = function (deployer) {
  return deployer.deploy(BestCoinV2, 20000, "BCT", "🥇");
}