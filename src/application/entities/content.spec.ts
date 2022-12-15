import { Content } from './content';

describe('Notification content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('You received a message.');

    expect(content).toBeTruthy();
  });

  test('it should not be able to create an empty notification content', () => {
    expect(() => new Content('')).toThrow();
  });

  test('it should not be able to create a notification content with more than 300 characters', () => {
    expect(() => new Content('a'.repeat(301))).toThrow();
  });
});
