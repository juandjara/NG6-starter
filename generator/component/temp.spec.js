import <%= upCaseName %>Module from './<%= name %>'
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Component from './<%= name %>.component';
import <%= upCaseName %>Template from './<%= name %>.html';

describe('<%= upCaseName %>', () => {
  let $rootScope, makeController;

  beforeEach(window.module(<%= upCaseName %>Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new <%= upCaseName %>Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('is a class', () => {
      let controller = makeController();
      expect(controller).to.be.a('class');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has a template' () => {
      expect(<%= upCaseName %>Template).to.be.ok;
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = <%= upCaseName %>Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(<%= upCaseName %>Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(<%= upCaseName %>Controller);
      });
  });
});
