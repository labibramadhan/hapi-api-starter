const {
  Boot,
} = requireF('core/services/EventsDecorator');

@Boot('finished')
class TurnOnServer { // eslint-disable-line no-unused-vars
  boot = () => {
    server.start(() => {
      if (!isTest && isMaster) {
        console.log(`Server running at: ${server.info.uri}`);
      }
    });
  }
}
