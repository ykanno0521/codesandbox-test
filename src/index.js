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

/**
 * デフォルト値, 引数
 */
// const sayHello = (name) => console.log(`こんにちは!${name}`);
// sayHello();
// =>こんにちは!undefined

// const sayHello2 = (name = "じゃけぇ") => console.log(`こんにちは!${name}`);
// sayHello2();
// =>こんにちは!じゃけぇ

/**
 * スプレッド構文 ...
 */

//  配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 40];
// const arr5 = [20, 50];

// const arr6 = [...arr4];
// // const arr6 = arr4　描いてしまうと参照元にも影響が出る。
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map, filterを使った配列
 */
// const nameArr = ["田中", "鈴木", "山田"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index)=> console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "山田") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })

// console.log(newNameArr);
