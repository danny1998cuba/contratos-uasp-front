import { EnabledPipe } from './enabled.pipe';

describe('EnabledPipe', () => {
  it('create an instance', () => {
    const pipe = new EnabledPipe();
    expect(pipe).toBeTruthy();
  });
});
