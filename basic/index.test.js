const { sum, person } = require('./index.js');


/**
 * describe : 여러 테스트를 한 그룹으로 묶고 설명을 붙이기 위해 사용
 * - 첫번째 인자 : 프롬포트에 표기 할 설명
 * - 두번째 인자 : 여러 테스트를 그룹으로 묶을 callback
 */
describe('test index.js file', () => {
  /**
   * it : 실제 테스트가 실행되는 명세
   * - 첫번째 인자 : 테스트 명세에 대한 설명
   * - 두번째 인자 : 테스트 코드 작성
   */
  it('tobe - 같은 값인지 확인(===)', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('toEqual - 오브젝트 비교 시 사용', () => {
    expect(person('Kim', 20)).toEqual({
      name: 'Kim',
      age: 20
    });
  });
});
