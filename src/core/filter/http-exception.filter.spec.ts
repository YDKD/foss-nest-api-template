import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpExceptoinFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
