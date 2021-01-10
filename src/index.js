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
const name = "じゃけぇ";
const age = 28;
// 私の名前はじゃけぇです。28歳です。

// 従来の方法
const message1 = "私の名前は" + name + "です。" + age + "です。";
console.log(message1);

// テンプレート文字列を用いると、、、
const message2 = `私の名前は${name}です。${age}です。`;
console.log(message2);
