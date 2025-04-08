// core/jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.spec.ts'], // 🔥 src 내부에 있는 .spec.ts만 테스트
  // 또는 아래처럼 무시 설정도 가능
  testPathIgnorePatterns: ['/dist/'],
};

export default config;
