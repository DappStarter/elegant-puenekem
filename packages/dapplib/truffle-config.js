require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth scrub protect hover clip sun surface'; 
let testAccounts = [
"0xd2e4395abc24bb9e363a6b1cd2bba360d95e49b60ade0e41fbb65769f72d367f",
"0xff50e188038e9c726ef96b4930a04cc322fdcffbe723fa5b003ab9ace2338753",
"0x315c54ef9732035155f13c7d63a07d5a3313dca967454839ca874da9ff0567bf",
"0x1ca4ea1ee2624cc3a0e044fbb3d31662b3d8b0e38c479971b0572712ad4182bb",
"0xb8d984b6e60b0e46194827538a6e661ad7695878c11ffb7c5494c0b1e4892d33",
"0x9f6599de994b1b12260c9c7022b1761a96e1295853ddfc8ac7809a54ef68ee25",
"0x36cfc40617147cec67a9e239dbdc00f9a9e2a383f99090fe9214bbeec4715ed3",
"0x90ff479864c5ed33791ab072d4a85ca51704a770ebe0475f26e9da4d2126c4f3",
"0xd1b5980a8f8bcf64fd1f70e13710152d7960e6aeaa0fd514d37dfcadd78363bc",
"0x40c66518a117a88a43da326eb684fde8faef36926915f47a693bc17ad904c7f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

