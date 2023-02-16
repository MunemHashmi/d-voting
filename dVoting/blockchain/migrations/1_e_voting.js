const EVoting = artifacts.require('ResultCalculation');
module.exports = function(deployer) {
  deployer.deploy(EVoting);
};