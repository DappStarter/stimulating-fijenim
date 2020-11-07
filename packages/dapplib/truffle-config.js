require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin crew fold skill'; 
let testAccounts = [
"0x0cc1f9e6f28a35e62c3a24b446c5bc7182a1b4bed91d567076c185431d9ced97",
"0xeaf4a5a9d30def509ad3c226697295df603433062e522417f44cee26bf11e05d",
"0xb6d2f40ca542bf84d56c7575db5c407910f1fd2f608820b579bf63521a5959c9",
"0xd6f440118708ad915565409803ec5aecd85363d6e5859871b7c7b5a2218e81a6",
"0x03640e62a58964d058b98e9282939d5b06a97bbb712b82085d5d4ee05f5ee2ac",
"0x42fececfc44dcfc11ee94a2975c1abbd4861067bc6a4499d9287248d28e4b456",
"0x03b9daed2ccc313590ddf163f8e51695ce87772f7d9b1f65461f30486623b6e9",
"0x9846c97f34fa2cea265b94234241a02828aaff541ce94810c9aef81dc5644d78",
"0x94d0f791b27eba77ec520158da08e2b7a6e6eb4d82c9e1a6ba4690ef18aa49f1",
"0x98d7d44b61d7ec445485a284cf632fa8850f42b8335f6be6f388e99bec6dd655"
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
            version: '^0.5.11'
        }
    }
};
