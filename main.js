function setupAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  function toggleFaq(e) {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle('open');
  }

  faqItems.forEach((item) => {
    item.addEventListener('click', toggleFaq);
  });
}

function formSetup() {
  const buttonToOpenForm = document.querySelectorAll('.button-open-form');
  const formWrapper = document.querySelector('.form-wrapper');
  const formEvento = document.querySelector('#form-evento');
  const customInfo = document.querySelector('#custom_info').dataset.url;

  function openForm(e) {
    formWrapper.classList.add('open');
    formWrapper.classList.remove('closed');
    formEvento.classList.add('open');
    webhookSetup(formEvento, customInfo, e.currentTarget.dataset.box);
  }

  function clickOutsideForm(e) {
    if (e.target === formWrapper) {
      formWrapper.classList.remove('open');
      formEvento.classList.remove('open');
      formWrapper.classList.add('closed');
      formEvento.classList.add('closed');
    }
  }

  window.addEventListener('click', clickOutsideForm);
  buttonToOpenForm.forEach((btn) => {
    btn.addEventListener('click', openForm);
  });

  function fillValuesUTM() {
    const params = new URLSearchParams(window.location.search);

    function setValue(input, value = null) {
      input.value = value;
    }

    params.forEach((value, key) => {
      const inputHidden = document.querySelector(`input[name=${key}`);

      if (inputHidden) {
        setValue(inputHidden, value);
      }
    });
  }

  fillValuesUTM();
}

function webhookSetup(form, url, box) {
  const webhooks = {
    org: {
      custom_info: 'cr02_org',
      box_one: 'https://webhook.loyoladigital.com/webhook/c5a21739-0c0a-4db8-b2a3-331ed20f267c',
      box_two: 'https://webhook.loyoladigital.com/webhook/b04905e9-dc1c-4397-bd10-b0bab1ab316d',
    },

    hot: {
      custom_info: 'cr2_hot',
      box_one: 'https://flow.loyoladigital.com/webhook-test/b1573f58-974d-4d7b-ab5c-457e66e964ca',
      box_two: 'https://webhook.loyoladigital.com/webhook/0e2c230f-86fe-4b20-ac39-7a4d2b55b91a',
    },
  };

  form.action = webhooks[url][box];
}

function countdown() {
  let now = new Date();
  let eventDate = new Date(2024, 7, 3, 24, 0, 0);
  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();
  let remTime = eventTime - currentTime;
  if (remTime <= 0) {
    document.getElementById('days').querySelector('.number').textContent = '0';
    document.getElementById('hours').querySelector('.number').textContent = '0';
    document.getElementById('minutes').querySelector('.number').textContent = '0';
    document.getElementById('seconds').querySelector('.number').textContent = '0';
    os;
    return;
  }
  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);
  h %= 24;
  m %= 60;
  s %= 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.getElementById('days').querySelector('.number').textContent = d;
  document.getElementById('hours').querySelector('.number').textContent = h;
  document.getElementById('minutes').querySelector('.number').textContent = m;
  document.getElementById('seconds').querySelector('.number').textContent = s;
  setTimeout(countdown, 1000);
}

window.addEventListener('load', countdown);
window.addEventListener('load', formSetup);
window.addEventListener('load', setupAccordion);
