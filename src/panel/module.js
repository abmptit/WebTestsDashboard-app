import {PanelCtrl} from  'app/plugins/sdk';
import '../css/webtestDashboard-app.css!'

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

}
ExampleAppPanelCtrl.template = '<h2 class="webtestDashboard-app-heading">Example app!</h2>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};

