const mapping: Record<string, string> = {
  courts: 'court',
  groups: 'group',
  matches: 'match',
  organizations: 'organization',
  rankings: 'ranking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
