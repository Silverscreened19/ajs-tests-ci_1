import healthStatus from '../health';

test('status healthy', () => {
  const mage = { name: 'Маг', health: 90 };
  const result = healthStatus(mage);
  expect(result).toBe('healthy');
});

test('status wounded', () => {
  const mage = { name: 'Маг', health: 30 };
  const result = healthStatus(mage);
  expect(result).toBe('wounded');
});

test('status critical', () => {
  const mage = { name: 'Маг', health: 1 };
  const result = healthStatus(mage);
  expect(result).toBe('critical');
});
