import Path from 'path';

const BaseAssociationRoute = requireF('core/services/generators/route/base/BaseAssociationRoute');
const LinkAssociationHandler = requireF('core/services/generators/handler/associations/LinkAssociationHandler');

export default class LinkAssociationRoute extends BaseAssociationRoute {
  constructor(model, association) {
    const methodName = 'associationLink';
    const handlerGenerator = new LinkAssociationHandler(model, association);

    super({
      association,
      handler: handlerGenerator.handler,
      methodName,
      model,
    });

    this.method = 'LINK';
    this.path = Path.join(model.name, '{pk}', association.as, 'link', '{pk2}');
  }
}
