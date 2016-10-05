import TopnavModule from './topnav'
import TopnavController from './topnav.controller';
import TopnavComponent from './topnav.component';
import TopnavTemplate from './topnav.html';

describe('Topnav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TopnavModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TopnavController();
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
      expect(TopnavTemplate).to.be.ok;
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TopnavComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TopnavTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TopnavController);
      });
  });
});
