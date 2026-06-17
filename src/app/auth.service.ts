import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData: any;

  constructor(
    private auth: Auth,
    private router: Router,
    public ngZone: NgZone,
    private db: AngularFireDatabase // Inject AngularFireDatabase
  ) {
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.UserData = user;
        // Store user data in the Realtime Database
        const path = `users/${user.uid}`;
        this.db.object(path).set(this.UserData);
      } else {
        this.UserData = null;
      }
    });
  }

  // Get Authenticated user from Firebase Realtime Database
  getAuthFire(): Observable<any> {
    return new Observable(observer => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          const userId = user.uid;
          const path = `users/${userId}`;
          const userRef = this.db.object(path).valueChanges();
          userRef.subscribe(userData => {
            observer.next(userData);
          });
        } else {
          observer.next(null);
        }
      });
    });
  }

  // Check whether User Is logged in or not
  get isLoggedIn(): Observable<boolean> {
    return new Observable(observer => {
      this.auth.onAuthStateChanged(user => {
        observer.next(!!user);
      });
    });
  }

  // Register Method
  Register(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.UserData = result.user;
        // Store user data in the Realtime Database
        const path = `users/${result.user.uid}`;
        this.db.object(path).set(this.UserData);
        this.ngZone.run(() => {
          // Call the SendVerificaitonMail() function when new user signs up
          this.sendEmailVerification();
          this.router.navigate(['home']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Login Method
  Login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.UserData = result.user;
        // Store user data in the Realtime Database
        const path = `users/${result.user.uid}`;
        this.db.object(path).set(this.UserData);
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Logout Method
  Logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.router.navigate(['signin']);
    });
  }

  // Send Password Reset Email Method
  sendPasswordResetEmails(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send Email Verification Method
  sendEmailVerification(): Promise<void> {
    return sendEmailVerification(this.auth.currentUser as User);
  }

  // Method to get the email of the currently logged in user
  getCurrentUserEmail(): Observable<string | null> {
    return new Observable(observer => {
      this.auth.onAuthStateChanged(user => {
        observer.next(user ? user.email : null);
      });
    });
  }

  //method to reset passowrd when forgotten
  resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
