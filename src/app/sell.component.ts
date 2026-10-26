import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  standalone: true,
  template: `
    <main class="min-h-screen bg-white dark:bg-slate-900">
      <header class="relative flex min-h-72 items-center bg-cover bg-center px-6 py-20" style="background-image: url('/assets/images/bg/01.jpg')">
        <div class="absolute inset-0 bg-slate-950/65"></div>
        <div class="relative mx-auto w-full max-w-6xl text-center text-white">
          <a href="/" class="mb-5 inline-block text-sm text-white/80 hover:text-white">Home</a>
          <h1 class="text-4xl font-semibold">Sell faster. Save thousands.</h1>
          <p class="mx-auto mt-4 max-w-xl text-white/80">A clear path from valuation to closing, with your costs in view.</p>
          <a href="/signup" class="mt-7 inline-block rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark">Get started</a>
        </div>
      </header>

      <section class="mx-auto max-w-6xl px-6 py-16">
        <div class="mb-10 text-center">
          <p class="mb-2 text-sm font-semibold uppercase text-primary">A simpler sale</p>
          <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">How it works</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <article class="border-t-2 border-primary pt-5">
            <p class="mb-3 text-sm font-semibold text-primary">01</p>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Evaluate your property</h3>
            <p class="mt-3 text-slate-500">Start with your home's value and decide on the right approach for your sale.</p>
          </article>
          <article class="border-t-2 border-primary pt-5">
            <p class="mb-3 text-sm font-semibold text-primary">02</p>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Plan your listing</h3>
            <p class="mt-3 text-slate-500">Prepare the details buyers need and set a clear asking price.</p>
          </article>
          <article class="border-t-2 border-primary pt-5">
            <p class="mb-3 text-sm font-semibold text-primary">03</p>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Close with confidence</h3>
            <p class="mt-3 text-slate-500">Keep track of the numbers as you move from offer to closing.</p>
          </article>
        </div>
      </section>

      <section class="border-y border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-800/50">
        <div class="mx-auto max-w-3xl">
          <div class="mb-8 text-center">
            <p class="mb-2 text-sm font-semibold uppercase text-primary">Plan ahead</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">Brokerage estimate</h2>
            <p class="mt-3 text-slate-500">An illustrative 1% estimate based on the selected property value.</p>
          </div>
          <div class="rounded-md bg-white p-6 shadow-sm dark:bg-slate-900">
            <div class="mb-4 flex justify-between text-sm font-medium text-slate-600 dark:text-slate-300">
              <span>$10,000</span>
              <span>$200,000</span>
            </div>
            <label for="home-value" class="sr-only">Estimated property value</label>
            <input id="home-value" type="range" min="10000" max="200000" step="1000" [value]="homeValue" (input)="updateEstimate($event)" class="w-full accent-primary">
            <div class="mt-6 grid grid-cols-1 gap-5 border-t border-slate-100 pt-5 sm:grid-cols-2 dark:border-slate-800">
              <div>
                <p class="text-sm text-slate-500">Property value</p>
                <p class="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{{ formatCurrency(homeValue) }}</p>
              </div>
              <div>
                <p class="text-sm text-slate-500">Estimated brokerage at 1%</p>
                <p class="mt-1 text-2xl font-semibold text-primary">{{ formatCurrency(homeValue * 0.01) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10">
        <p class="text-slate-500">Ready to explore homes instead?</p>
        <a href="/buy" class="rounded-md border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-white">Browse homes</a>
      </footer>
    </main>
  `
})
export class SellComponent implements OnInit, OnDestroy {
  homeValue = 10000;

  ngOnInit(): void {
    document.body.classList.add('route-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('route-page');
  }

  updateEstimate(event: Event): void {
    this.homeValue = Number((event.target as HTMLInputElement).value);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  }
}