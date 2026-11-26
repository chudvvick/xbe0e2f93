self.addEventListener('push', e => {
  let d = {t: '•', b: ''};
  try { d = e.data.json(); } catch (_) {}
  // iOS revokes the subscription if a push shows nothing, so always show one
  e.waitUntil(self.registration.showNotification(d.t || '•', {body: d.b || ''}));
});
self.addEventListener('notificationclick', e => e.notification.close());
