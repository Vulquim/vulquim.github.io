(() => {
  'use strict';

  const form = document.querySelector('.contact-form');
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById('contact-status');

  function showStatus(key) {
    status.dataset.contactCopy = key;
    status.textContent = key ? window.vulquimI18n.t(`contact.${key}`) : '';
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;

    const payload = Object.fromEntries(new FormData(form));
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    showStatus('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'omit',
        redirect: 'error',
        signal: AbortSignal.timeout(15000)
      });
      if (response.status === 429) {
        showStatus('limited');
      } else if (response.ok && (await response.json()).sent === true) {
        form.reset();
        showStatus('sent');
      } else {
        showStatus('error');
      }
    } catch {
      showStatus('error');
    } finally {
      form.removeAttribute('aria-busy');
      button.disabled = false;
    }
  });

  fetch(form.action, { cache: 'no-store', credentials: 'omit', redirect: 'error', signal: AbortSignal.timeout(5000) })
    .then(async (response) => {
      if (response.ok && (await response.json()).ready === true) {
        showStatus('');
        button.disabled = false;
      }
    })
    .catch(() => { /* Keep sending disabled when the service is offline. */ });
})();
