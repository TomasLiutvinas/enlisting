const delivery = document.querySelector('#delivery');
const letter = document.querySelector('#letter');
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
