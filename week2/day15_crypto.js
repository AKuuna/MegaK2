//HMac - funkcja skrótu

const {createHmac} = require('crypto');

const salt ='sdpflwooamckf34idjv,nm,x,m zxxcxspewe aadasaz;vvpffofvnfgwofm m;vpfdpmlas.l l m.vforsp[fsdkvmlk mx,xdvkds [p98u5ke 98*uvjdjvnb';

const hash = createHmac('sha512', salt)
    .update('Hello World')
    .digest('hex');

const hash1 = createHmac('sha512', salt)
    .update('Hello world')
    .digest('hex')
console.log(hash);
console.log(hash1); //two different hashes

//PBKDF2
const {pbkdf2} =require('crypto');

const originalText = 'Hell World'


//
const salt1 = 'peo9r8e4fifdhn4r83240r2pwjfj0dc)()8734c,skfjs sogri4etii4it 34t e4'

// pbkdf2('Hell World', 'podlq[]cmz;cje83kad2;a;22oda,nxbcfgesuufapf wq v2', 100000, 64, 'sha512', (err, derivedKey) =>{

pbkdf2(originalText, salt1, 100000, 64, 'sha512', //variation of sha15 - much safer
(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex'));
});

