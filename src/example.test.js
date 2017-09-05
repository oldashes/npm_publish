/**
 * Created by XuTian on 2017/9/5.
 */
import { sayHello } from './example'

const word0 = 'hello'
const word1 = 'world'
const word2 = 'some others'

test('sayHello-1', () => {
  expect(sayHello(word0)).toBe('you said, hello')
})

test('sayHello-2', () => {
  expect(sayHello(word1)).toBe('you said, world')
})

test('sayHello-2', () => {
  expect(sayHello(word2)).toBe(word2)
})