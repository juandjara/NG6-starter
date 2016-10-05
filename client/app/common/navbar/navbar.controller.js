class NavbarController {
  constructor($log) {
    "ngInject";
    postInject(this, arguments, NavbarController.$inject);
    this.name = 'navbar';
  }
  sayHi(){
    this.$log.debug("Hello from the navbar!");
  }
}

function postInject(instance, dependencies, dependency_names){
  [].forEach.call(dependencies, function(dep, index){
    let depname = dependency_names[index]
    instance[depname] = dep;
  });
}

export default NavbarController;
