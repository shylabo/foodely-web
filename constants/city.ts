export interface City {
  countryCode: string;
  value: string;
  label: string;
}

const canada = [
  {
    countryCode: 'ca',
    value: 'vancouver',
    label: 'Vancouver',
  },
  {
    countryCode: 'ca',
    value: 'toronto',
    label: 'Toronto',
  },
  {
    countryCode: 'ca',
    value: 'montreal',
    label: 'Montreal',
  },
  {
    countryCode: 'ca',
    value: 'calgary',
    label: 'Calgary',
  },
  {
    countryCode: 'ca',
    value: 'edmonton',
    label: 'Edmonton',
  },
  {
    countryCode: 'ca',
    value: 'ottawa',
    label: 'Ottawa',
  },
  {
    countryCode: 'ca',
    value: 'winnipeg',
    label: 'Winnipeg',
  },
  {
    countryCode: 'ca',
    value: 'quebec',
    label: 'Quebec',
  },
] as const;

export const availableCities = [...canada] as const;
