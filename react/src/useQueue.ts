import { Queue } from '@ds/core';
import { useState } from 'react';

export function useQueue() {
  const [queue] = useState(() => new Queue());
}
