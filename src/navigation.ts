import { getPermalink } from './utils/permalinks';
import { client } from './client';

export const headerData = {
  links: [
    { text: 'Étlap', href: getPermalink('/#etlap') },
    { text: 'Rólunk', href: getPermalink('/#rolunk') },
    { text: 'Jó tudni', href: getPermalink('/#hogyan') },
    { text: 'Kapcsolat', href: getPermalink('/#kapcsolat') },
  ],
  actions: [
    {
      text: 'Megnézem az étlapot',
      href: getPermalink('/#etlap'),
      variant: 'primary' as const,
      icon: 'tabler:tools-kitchen-2',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Étlap',
      links: [
        { text: 'Lángos (burgonyás)', href: getPermalink('/#langos') },
        { text: 'Gyros', href: getPermalink('/#gyros') },
        { text: 'Retro hamburger', href: getPermalink('/#burger') },
      ],
    },
    {
      title: 'A hely',
      links: [
        { text: 'Rólunk', href: getPermalink('/#rolunk') },
        { text: 'Jó tudni', href: getPermalink('/#hogyan') },
        { text: 'Gyakori kérdések', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Kapcsolat',
      links: [
        { text: client.contact.address, href: client.contact.mapHref },
        { text: 'Nyitvatartás: K–P 9–18', href: getPermalink('/#kapcsolat') },
        { text: client.contact.phone, href: `tel:${client.contact.phone.replace(/\s/g, '')}` },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    ...(client.social.facebook
      ? [{ ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: client.social.facebook }]
      : []),
    ...(client.social.instagram
      ? [{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: client.social.instagram }]
      : []),
  ],
  footNote: `
    <span class="font-semibold">${client.brand.name}</span> — ${client.brand.tagline}. Koncepció bemutató oldal.
  `,
};
