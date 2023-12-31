//https://qiita.com/soarflat/items/06377f3b96964964a65d
//https://typescriptbook.jp/tutorials/eslint
//https://prettier.io/docs/en/options.html
// export PATH=$PATH:./node_modules/.bin
// prettier app.js --write
// npx husky@6.0.0 add .husky/pre-commit "lint-staged"

class Person {
  constructor(name) {
    this.name = name;
  }
}

const profile = {
  name: 'soarflat',
  sex: 'male',
  location: 'Tokyo',
};

const hoge = (message) => {
  console.log(message);
};

hoge(new Person('Person').name);

const fooBar = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

fooBar(
  111,
  {
    hoge: 'hoge!',
  },
  profile
);
