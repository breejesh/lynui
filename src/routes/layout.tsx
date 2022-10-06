import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/footer/footer';
import { Navbar } from '~/components/navbar/navbar';

export default component$(() => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
});
