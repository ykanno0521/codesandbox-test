/**
 * const let等の変数宣言
 *  */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能

// val1 = "var変数上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // letは聖宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き；"

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更可能
// const val4 = {
//   name: "じゃけ",
//   age: "20"
// };

// val4.name = "たかし";

// console.log(val4);

// constで定義したオブジェクトはプロパティの変更可能
// const val5 = ["dog", "cat"];

// val5[3] = "yama";
// console.log(val5);

// テンプレート文字列
// const name = "じゃけぇ";
// const age = 28;
// 私の名前はじゃけぇです。28歳です。

// 従来の方法
// const message1 = "私の名前は" + name + "です。" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いると、、、
// const message2 = `私の名前は${name}です。${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// アロー関数
// const func2 = (str)=> {
//   return str;
// }

// console.log(func2("あああ"));

// const func3 = (num1, num2) => num1 + num2

// console.log(func3(3,5));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "じゃけぇ",
//    age: 28
//  }

//  const message1 = (`私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`);
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = (`私の名前は${name}です。年齢は${age}です。`);
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];
// const [name, age] = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
