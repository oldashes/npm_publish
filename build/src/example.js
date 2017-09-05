/**
 * Created by XuTian on 2017/9/5.
 */

const sayHello = (word) => {
  if (word === 'hello') {
    return 'you said, hello'
  } else if (word === 'world') {
    return 'you said, world'
  } else {
    return word
  }
}

export { sayHello }