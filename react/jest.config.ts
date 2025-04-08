// react/jest.config.ts

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.spec.ts'], // ✅ dist 대신 src만 테스트
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@ds/core$': '<rootDir>/../core/src/index.ts', // ✅ ts 소스 직접 참조
  },
};

export default config;
