class TopnavController {
  constructor($mdSidenav) {
    "ngInject";
    this.$mdSidenav = $mdSidenav;
  }
  toggleSidenav(){
    this.$mdSidenav("left").toggle();
  }
}

export default TopnavController;
