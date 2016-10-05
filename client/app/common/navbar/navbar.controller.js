class NavbarController {
  constructor($log) {
    "ngInject";
    inject(this, arguments, NavbarController.$inject);
    this.name = 'navbar';
  }
  test(){
    this.$log.debug("Hello from the navbar");
  }
}

function inject(instance, dependencies, dependency_names){
  [].slice.call(dependencies, 0).forEach(function(dep, index){
    let depname = dependency_names[index]
    instance[depname] = dep;
  });
}

export default NavbarController;
