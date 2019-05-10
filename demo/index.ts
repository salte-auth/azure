import { SalteAuth } from '@salte-auth/salte-auth/dist/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Azure } from '../src/azure';

const auth = new SalteAuth({
  providers: [
    new Azure({
      url: 'https://login.microsoftonline.com/3f6df7ce-5830-4280-ae97-8e4016d1c6d0',
      clientID: 'c679f65f-8070-4719-8798-31c6fc256736'
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const loginButton = document.createElement('button');
loginButton.innerHTML = `Login`;
loginButton.addEventListener('click', () => {
  auth.login('azure');
});
document.body.appendChild(loginButton);

const logoutButton = document.createElement('button');
logoutButton.innerHTML = `Logout`;
logoutButton.addEventListener('click', () => {
  auth.logout('azure');
});
document.body.appendChild(logoutButton);
