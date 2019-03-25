// node 에서는 아래와 같은 방식으로 해야 한다. btoa 나 atob 를 쓸 수 없기 때문이다.
// 참고: https://stackoverflow.com/questions/23097928/node-js-btoa-is-not-defined-error
// encoding
console.log(Buffer.from('안녕하세요').toString('base64'));
// decoding
console.log(Buffer.from("7JWI64WV7ZWY7IS47JqU", 'base64').toString());