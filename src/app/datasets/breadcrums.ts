export const datasets = {
  users: {
    Home: "/admin",
    Users: "/admin/users",
  },
};

export type Link = {
  name: string;
  link: string | boolean;
};
export type BreadcrumsProps = {
  links: Array<Link>;
};

export function makeBreadcrum(
  type: keyof typeof datasets,
  link: any
): Link[] {
  const data = datasets[type];
  const breadcrum = <Link[]>[];

  for (const [key, value] of Object.entries(data)) {
    if (key == link) {
      breadcrum.push({
        name: key,
        link: false,
      });
      return breadcrum;
    } else {
      breadcrum.push({
        name: key,
        link: value,
      });
    }
  }
  return breadcrum;
}
