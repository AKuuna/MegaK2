
function calc(operation, a, b) {
    //let result;
    switch(operation) {//all options are checked, so default could be first
        case 'add':
        case 'plus':
            return a + b;
        case 'subtract':
            return a + b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return 'Operation is not supported';
        // case 'divide':
        //     result = a / b;
        //     break;
    }
    //return result;
}

//IFOLOGY:
// function calc(operation, a, b) {
//     if (operation ==='add') {
//         return a + b;
//     }

//     if (operation ==='subtract') {
//         return a - b;
//     }

//     if (operation ==='multiply') {
//         return a * b;
//     }

//     if (operation ==='divide') {
//         return a / b;
//     }
    
// };

module.exports = {
    calc,
}