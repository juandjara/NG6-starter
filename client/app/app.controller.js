class AppController {
  constructor($mdSidenav, $mdMedia) {
    "ngInject";
    this.$mdMedia = $mdMedia;
    this.$mdSidenav = $mdSidenav;
  }
  toggleSidenav(){
    this.$mdSidenav("left").toggle();
  }
}

export default AppController;
