// fake incrementing visitor counter
var count = 133742 + Math.floor(Math.random() * 900);
var el = document.getElementById('counterDigits');
function renderCount() {
  el.innerHTML = String(count).split('').map(function (d) { return '<span>' + d + '</span>'; }).join('');
}
renderCount();
setInterval(function () {
  count += 1;
  renderCount();
}, 4000);

// avatar emoji cycle - edit list to change which emojis show up
var avatarEmojis = ['🐟', '🐠', '🐡', '🦈', '🐙', '🦑', '🐬'];
var avatarEl = document.getElementById('avatarEmoji');
setInterval(function () {
  avatarEl.textContent = avatarEmojis[Math.floor(Math.random() * avatarEmojis.length)];
}, 10000);

// fake guestbook button
document.getElementById('guestbookBtn').addEventListener('click', function (e) {
  e.preventDefault();
  alert('aww thanks for wanting 2 sign but this guestbook is 100% fake lol');
});
