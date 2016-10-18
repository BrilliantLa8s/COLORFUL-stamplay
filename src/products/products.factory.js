app.service('Product', function($window){
  return {
    all: function(){
      return Stamplay.Object("products").get({})
      .then(function(resp) {
        return resp.data
      }, function(err) {
        return err
      })
    }
  }
})
