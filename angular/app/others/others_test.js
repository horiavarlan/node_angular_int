'use strict';

describe('myApp.others module', function() {

  beforeEach(module('myApp.others'));

  describe('contact controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var contactCtrl = $controller('ContactCtrl');
      expect(contactCtrl).toBeDefined();
    }));

  });
});