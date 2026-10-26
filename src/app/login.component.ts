import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <main class="login-view fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-auto bg-cover bg-center px-4 py-12" style="background-image: url('/assets/images/bg/01.jpg')">
      <div class="absolute inset-0 bg-slate-950/70"></div>
      <section class="relative z-10 w-full max-w-md rounded-md bg-white p-8 shadow-xl dark:bg-slate-900">
        <a href="/" class="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary">
          <span aria-hidden="true">&larr;</span> Back to home
        </a>
        <h1 class="mb-2 text-2xl font-semibold text-slate-900 dark:text-white">Welcome back</h1>
        <p class="mb-7 text-slate-500">Sign in to your account.</p>
        <form (submit)="preventSubmit($event)" class="space-y-5">
          <div>
            <label for="login-email" class="mb-2 block font-medium text-slate-700 dark:text-slate-200">Email address</label>
            <input id="login-email" name="email" type="email" autocomplete="email" required class="w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="name@example.com">
          </div>
          <div>
            <label for="login-password" class="mb-2 block font-medium text-slate-700 dark:text-slate-200">Password</label>
            <input id="login-password" name="password" type="password" autocomplete="current-password" required class="w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Password">
          </div>
          <button type="submit" class="w-full rounded-md bg-primary px-4 py-3 font-medium text-white transition-colors hover:bg-primary-dark">Sign in</button>
        </form>
      </section>
    </main>
  `
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.classList.add('route-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('route-page');
  }

  preventSubmit(event: Event): void {
    event.preventDefault();
  }
}