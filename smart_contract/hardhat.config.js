// https://eth-goerli.g.alchemy.com/v2/0c2l3VdrSHfYc4NDwJi6VvgfRPJiI3gg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:  {
      url: 'https://eth-goerli.g.alchemy.com/v2/0c2l3VdrSHfYc4NDwJi6VvgfRPJiI3gg',
      accounts: [ '76201c331a76e9517143dd4734062511c2d544c56f64add4b7a5f2e88a774976' ]
    }
  }
}