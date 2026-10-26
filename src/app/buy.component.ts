import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  standalone: true,
  template: `
    <main class="route-view min-h-screen bg-white dark:bg-slate-900">
      <header class="relative flex min-h-72 items-center bg-cover bg-center px-6 py-20" style="background-image: url('/assets/images/bg/01.jpg')">
        <div class="absolute inset-0 bg-slate-950/65"></div>
        <div class="relative mx-auto w-full max-w-6xl text-center text-white">
          <a href="/" class="mb-5 inline-block text-sm text-white/80 hover:text-white">Home</a>
          <h1 class="text-4xl font-semibold">Find your next home</h1>
          <form (submit)="preventSubmit($event)" class="mx-auto mt-8 flex max-w-3xl flex-col gap-3 rounded-md bg-white p-3 sm:flex-row">
            <label class="sr-only" for="property-search">City, address, or ZIP code</label>
            <input id="property-search" name="search" type="search" placeholder="City, address, or ZIP code" class="min-w-0 flex-1 rounded-md px-3 py-3 text-slate-900 outline-none">
            <button type="submit" class="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark">Search homes</button>
          </form>
        </div>
      </header>

      <section class="mx-auto max-w-6xl px-6 py-16">
        <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="mb-2 text-sm font-semibold uppercase text-primary">For sale</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">Featured properties</h2>
          </div>
          <p class="text-slate-500">{{ properties.length }} homes to explore</p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (property of properties; track property.image) {
            <article class="overflow-hidden rounded-md border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              <img [src]="property.image" [alt]="property.title" class="aspect-[4/3] w-full object-cover">
              <div class="p-5">
                <p class="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{{ property.price }}</p>
                <h3 class="font-medium text-slate-800 dark:text-slate-100">{{ property.title }}</h3>
                <p class="mt-2 text-sm text-slate-500">{{ property.details }}</p>
              </div>
            </article>
          }
        </div>
      </section>
    </main>
  `
})
export class BuyComponent implements OnInit, OnDestroy {
  readonly properties = [
    { image: '/assets/images/property/1.jpg', title: 'Hillshire Avenue, Baton Rouge', price: '$425,000', details: '4 beds · 3 baths · 2,400 sq ft' },
    { image: '/assets/images/property/2.jpg', title: 'Stonewall Drive, Plaquemine', price: '$389,000', details: '3 beds · 2 baths · 1,950 sq ft' },
    { image: '/assets/images/property/3.jpg', title: 'Sandbar Drive, Addis', price: '$510,000', details: '4 beds · 3 baths · 2,700 sq ft' }
  ];

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