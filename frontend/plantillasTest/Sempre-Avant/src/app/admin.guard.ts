import { CanActivateFn } from '@angular/router';


export const adminGuard: CanActivateFn = (route, state) => {
  
  if(localStorage.getItem('rol')=="admin"){
    
    return true;
  }

  return false;
};
