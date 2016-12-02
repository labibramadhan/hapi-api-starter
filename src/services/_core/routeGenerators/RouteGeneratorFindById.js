import path from 'path';

const RouteGeneratorBaseGeneral = requireF('services/_core/routeGenerators/base/RouteGeneratorBaseGeneral');
const HandlerGeneratorFindById = requireF('services/_core/handlerGenerators/HandlerGeneratorFindById');

export default class RouteGeneratorFindById extends RouteGeneratorBaseGeneral {
  constructor(model) {
    const methodName = 'findById';
    const handlerGenerator = new HandlerGeneratorFindById(model);

    super({
      handler: handlerGenerator.handler,
      methodName,
      model,
    });

    this.method = 'GET';
    this.path = path.join(model.name, '{pk}');
  }
}
