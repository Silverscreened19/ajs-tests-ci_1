export default function healthStatus(character) {
  let status = '';
  if (character.health > 50) {
    status = 'healthy';
  } if (character.health <= 50 && character.health >= 15) {
    status = 'wounded';
  } if (character.health < 15) {
    status = 'critical';
  }
  return status;
}
