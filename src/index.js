
import { getUsers } from './api/users.api';

getUsers()
  .then(result => {
    const container = document.querySelector('#users');
    container.innerHTML = result.map(single => {
      return `<li class="user_name" data-id="user-${single.id}">${single.lastName}, ${single.firstName}</li>`;
    }).join('');
  });
