import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <main class="min-h-screen bg-white dark:bg-slate-900">
      <header class="relative flex min-h-64 items-center bg-cover bg-center px-6 py-16" style="background-image: url('/assets/images/bg/01.jpg')">
        <div class="absolute inset-0 bg-slate-950/65"></div>
        <div class="relative mx-auto w-full max-w-6xl text-center text-white">
          <a href="/" class="mb-5 inline-block text-sm text-white/80 hover:text-white">Home</a>
          <h1 class="text-4xl font-semibold">Contact us</h1>
          <p class="mx-auto mt-3 max-w-xl text-white/80">Questions about buying or selling? Send us a message.</p>
        </div>
      </header>

      <section class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-5">
        <div class="lg:col-span-2">
          <p class="mb-2 text-sm font-semibold uppercase text-primary">Get in touch</p>
          <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">We’re here to help.</h2>
          <p class="mt-4 text-slate-500">Reach out with a question about your next move.</p>
          <div class="mt-8 space-y-6">
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-white">Phone</h3>
              <a href="tel:+152534468854" class="mt-1 inline-block text-slate-500 hover:text-primary">+1 525 344 68854</a>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-white">Email</h3>
              <a href="mailto:contact@example.com" class="mt-1 inline-block text-slate-500 hover:text-primary">contact&#64;example.com</a>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-white">Office</h3>
              <p class="mt-1 text-slate-500">C/54 Northwest Freeway, Suite 558<br>Houston, USA 485</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3">
          <form (submit)="submitMessage($event)" class="space-y-5 rounded-md border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label for="contact-name" class="mb-2 block font-medium text-slate-700 dark:text-slate-200">Your name</label>
                <input id="contact-name" name="name" type="text" autocomplete="name" required class="w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="Name">
              </div>
              <div>
                <label for="contact-email" class="mb-2 block font-medium text-slate-700 dark:text-slate-200">Your email</label>
                <input id="contact-email" name="email" type="email" autocomplete="email" required class="w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="name@example.com">
              </div>
            </div>
            <div>
              <label for="contact-subject" class="mb-2 block font-medium text-slate-700 dark:text-slate-200">Subject</label>
              <input id="contact-subject" name="subject" type="text" required class="w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="How can we help?">
            </div>
            <div>
              <label for="contact-message" class="mb-2 block font-medium text-slate-700 dark:text-slate-200">Message</label>
              <textarea id="contact-message" name="message" rows="5" required class="w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="Write your message"></textarea>
            </div>
            <button type="submit" class="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark">Send message</button>
            <p aria-live="polite" class="min-h-5 text-sm text-slate-500">{{ submissionMessage }}</p>
          </form>
        </div>
      </section>

      <div class="h-72 w-full border-t border-slate-200 dark:border-slate-700">
        <iframe title="Map to our Houston office" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sus!4v1566305861440!5m2!1sen!2sus" class="h-full w-full border-0"></iframe>
      </div>
    </main>
  `
})
export class ContactComponent implements OnInit, OnDestroy {
  submissionMessage = '';

  ngOnInit(): void {
    document.body.classList.add('route-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('route-page');
  }

  submitMessage(event: Event): void {
    event.preventDefault();
    this.submissionMessage = 'Message delivery is not configured yet. Please contact us by phone or email.';
  }
}