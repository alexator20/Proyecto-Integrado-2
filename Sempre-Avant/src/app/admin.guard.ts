import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('rol') === 'admin') {
    return true;
  }

  // Redirigir a /home si no es admin
  router.navigate(['/home']);
  return false;
};
