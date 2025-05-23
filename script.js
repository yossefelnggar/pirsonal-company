// تفاعل بسيط عند الضغط على روابط النافبار
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert('رابط تجريبي فقط 😊');
  });
});
