const {
  getPackage,
} = requireF('services/_core/CommonServices');

const ResolverModels = requireF('services/_core/resolvers/ResolverModels');

export default async () => {
  const resolverModels = new ResolverModels();
  const role = resolverModels.getModel('role');

  // retrieve all available roles
  const availableRoles = server.plugins[`${getPackage().name}-acl`];
  const availableRolesNames = Object.keys(availableRoles);

  // loop each roles name
  for (const roleName of availableRolesNames) { // eslint-disable-line no-restricted-syntax
    // check if this role name already persists in database
    await role.findOrCreate({
      where: {
        name: roleName,
      },
    });
  }
};
