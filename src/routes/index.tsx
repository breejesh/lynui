import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Features } from '~/components/features/features';
import { Hero } from '~/components/hero/hero';
import { Pricing } from '~/components/pricing/pricing';
import { Clients } from '~/components/clients/clients';
import { Team } from '~/components/team/team';

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Pricing />
      <Team />
    </>
  );
});

export const head: DocumentHead = {
  title: 'lynUI',
};
