const delivery = document.querySelector('#delivery');
const letter = document.querySelector('#letter');
const transmission = document.querySelector('#transmission');
const message = transmission.textContent;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const cipher = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/';
let revealFrame;
function revealTransmission(start) {
  if (reducedMotion.matches) {
    transmission.textContent = message;
    return;
  }
  const progress = Math.min((performance.now() - start) / 2200, 1);
  const resolved = Math.floor(progress * message.length);
  transmission.textContent = Array.from(message, (character, index) => {
    if (index < resolved || /\s|[.,]/.test(character)) return character;
    return cipher[Math.floor(Math.random() * cipher.length)];
  }).join('');
  if (progress < 1) {
    revealFrame = requestAnimationFrame(() => revealTransmission(start));
  }
}
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) {
    cancelAnimationFrame(revealFrame);
    transmission.textContent = message;
  }
});
revealTransmission(performance.now());
document.querySelector('#open').addEventListener('click', () => {
  delivery.hidden = true;
  letter.hidden = false;
  document.title = 'Šaukimas į armiją · Karo ropliai-šunys';
  document.querySelector('#letter-title').setAttribute('tabindex', '-1');
  document.querySelector('#letter-title').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
});
document.querySelector('#close').addEventListener('click', () => {
  letter.hidden = true;
  delivery.hidden = false;
  document.title = 'Jums pristatytas šaukimas';
  document.querySelector('#open').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
});
