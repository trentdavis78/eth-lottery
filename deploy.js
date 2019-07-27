const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const { interface, bytecode } = require('./compile');
 
const provider = new HDWalletProvider(
    'flash expire beauty forum happy make tail improve panda express put arctic',
    'https://rinkeby.infura.io/v3/145277223ca24f8caf5b1a09e42eb836'
);
 
const web3 = new Web3(provider); 
const deploy = async () => {
 
    const accounts = await web3.eth.getAccounts();
 
    console.log('Attempting to deploy from account', accounts[0]);
 
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000' });
 
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
 
}; 
deploy();